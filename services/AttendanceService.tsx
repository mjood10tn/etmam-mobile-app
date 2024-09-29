
import axios from "../utils/axios";

export async function getAttendance() {

      const { data: attendance } = await axios.get("/getAttendance");
       return attendance;
}
