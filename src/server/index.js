import {port,log,text,sign,sist,href,error,warning,arrow,lamda,app} from "./app.js"
import { connectDB } from "./db.js";
app.listen(port);
const startTime = Date.now()
connectDB();
log(text(sist.bold('Node'), `Server ready on ${sign(Date.now() - startTime)} ms
${arrow} Local:`), href(`http://localhost:${port}/`));