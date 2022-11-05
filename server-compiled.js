(()=>{var e={819:(e,t,s)=>{const r=s(185),o=new(0,r.Schema)({username:{type:String,required:!0},description:{type:String,required:!0},duration:{type:Number,required:!0},date:{type:Date,required:!0}},{timestamps:!0}),n=r.model("Exercise",o);e.exports=n},994:(e,t,s)=>{const r=s(185),o=new(0,r.Schema)({username:{type:String,required:!0,unique:!0,trim:!0,minlength:3}},{timestamps:!0}),n=r.model("User",o);e.exports=n},39:(e,t,s)=>{const r=s(860).Router();let o=s(819);r.route("/").get(((e,t)=>{o.find().then((e=>t.json(e))).catch((e=>t.status(400).json("Error: "+e)))})),r.route("/add").post(((e,t)=>{const s=e.body.username,r=e.body.description,n=Number(e.body.duration),a=Date.parse(e.body.date);new o({username:s,description:r,duration:n,date:a}).save().then((()=>t.json("Exercise added!"))).catch((e=>t.status(400).json("Error: "+e)))})),r.route("/:id").get(((e,t)=>{o.findById(e.params.id).then((e=>t.json(e))).catch((e=>t.status(400).json("Error: "+e)))})),r.route("/:id").delete(((e,t)=>{o.findByIdAndDelete(e.params.id).then((()=>t.json("Exercise deleted."))).catch((e=>t.status(400).json("Error: "+e)))})),r.route("/update/:id").post(((e,t)=>{o.findById(e.params.id).then((s=>{s.username=e.body.username,s.description=e.body.description,s.duration=Number(e.body.duration),s.date=Date.parse(e.body.date),s.save().then((()=>t.json("Exercise updated!"))).catch((e=>t.status(400).json("Error: "+e)))})).catch((e=>t.status(400).json("Error: "+e)))})),e.exports=r},346:(e,t,s)=>{const r=s(860).Router();let o=s(994);r.route("/").get(((e,t)=>{o.find().then((e=>t.json(e))).catch((e=>t.status(400).json("Error: "+e)))})),r.route("/add").post(((e,t)=>{const s=e.body.username;new o({username:s}).save().then((()=>t.json("User added!"))).catch((e=>t.status(400).json("Error: "+e)))})),e.exports=r},582:e=>{"use strict";e.exports=require("cors")},142:e=>{"use strict";e.exports=require("dotenv")},860:e=>{"use strict";e.exports=require("express")},185:e=>{"use strict";e.exports=require("mongoose")}},t={};function s(r){var o=t[r];if(void 0!==o)return o.exports;var n=t[r]={exports:{}};return e[r](n,n.exports,s),n.exports}(()=>{const e=s(860),t=s(582),r=s(185);s(142).config();const o=e(),n=process.env.PORT||5002;o.use(t()),o.use(e.json());const a=process.env.ATLAS_URI;r.connect(a,{useNewUrlParser:!0}),r.connection.once("open",(()=>{console.log("MongoDB database connection established successfully")})),o.get("/admin",((e,t)=>{t.send("Welcome to admin")})),o.get("/",((e,t)=>{t.send("Welcome to my database")}));const d=s(39),i=s(346);o.use("/exercises",d),o.use("/users",i),o.listen(n,(()=>{console.log(`Server is running on port: ${n}`)}))})()})();