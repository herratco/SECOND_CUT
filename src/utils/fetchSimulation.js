const fetchSimulation = (dataBase, time) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(dataBase);
      reject(new Error("Ups algo salio mal"));
    }, time);
  });
};

export default fetchSimulation;
