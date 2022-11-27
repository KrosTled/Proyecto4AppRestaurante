import { getDocs, addDoc, collection} from "firebase/firestore";
import { db } from "../database/firebase";

const COLECCION = "Reservas";

const readData = async (coleccion) => {
  try {
    const cole = await getDocs(collection(db, coleccion));
  } catch (error) {
    console.log("Error leyendo los datos: ", error);
  }
}

const saveData = async (coleccion, name, email, fecha, hora) => {
  try {
    await addDoc(collection(db, coleccion),
      {
        name: name,
        email: email,
        date: fecha,
        time:hora,
      });
  } catch (error) {
    console.log("Error guardando datos: ", error);
  }
}
export { readData, saveData, COLECCION }