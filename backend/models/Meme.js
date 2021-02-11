import mongoose from 'mongoose';
 
const MemeSchema  = new mongoose.Schema ({

    id : String,

    name : {
        type: String,
        required: true,
      },
    caption :  {
        type: String,
        required: true,
      },
    url :  {
        type: String,
        required: true,
      },
});

const MemeModel = mongoose.model("memes", MemeSchema);

export default MemeModel;