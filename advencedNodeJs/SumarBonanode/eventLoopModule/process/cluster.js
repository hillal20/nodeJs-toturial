const cluster = require("cluster");
const os = require("os");

// os module help us to read how many  the cpu cores
// cluster module tell us if th current module (cluster.js file )
// is the master process or not

const masterPrecessFn = () => {
  return " # of users in Db is 10 ";
};
const numberOfUsers = masterPrecessFn();

if (cluster.isMaster) {
  const cpus = os.cpus().length;
  for (let i = 0; i < cpus; i++) {
    cluster.fork();
  }
  console.log(`==== MASTER PROCESS  ==> ${process.pid}`);
  const workers = Object.values(cluster.workers);

  workers.forEach(worker => {
    worker.send(`I am a worker  ${worker.id} ===> ${numberOfUsers}    `);
  });

  cluster.on("exit", (worker, code, signal) => {
    // if a process exit , new one will automatically start
    if (code !== 0 && !worker.exitedAfterDisconnect) {
      // this if statement is to avoid worker.disconnect &&
      // worker.kill(); hence the case is an sudden crash for
      // the server
      console.log(`worker  ${worker.id} crashed ... starting new one `);
      cluster.fork();
    }

    process.on("SIGUSR2", () => {
      const workers2 = Object.values(cluster.workers);
      const restartAWorker = workerIndex => {
        const currentWorker = workers2[workerIndex];
        if (!currentWorker) {
          // if there is no more worker to restart the function
          // stops.
          return;
        }
        currentWorker.on("exit", () => {
          if (!currentWorker.exitedAfterDisconnect) {
            return;
          }
          console.log(`exited process  ==> ${worker.process.pid}`);
          const newWorker = cluster.fork();

          newWorker.on("listening", () => {
            restartAWorker(workerIndex + 1);
          });
        });
        currentWorker.disconnect();
      };
      restartAWorker(0); // just to start with first worker
    });
  });
} else {
  require("./server.js");
}
