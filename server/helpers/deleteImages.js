const Path=require("path")
"".split()
const deleteImage = (relativePAth) => {
  const path = Path.join(Path.parse(__dirname).dir, relativePAth.split(/\/|\\/))
  FS.unlink(path, () => {
      console.log("brand image was removd successfuly")
  })
}


module.exports=deleteImage