const dateHandler = (req,res)=>{
  try{
    let d;
    if(req.params.date){
      if(req.params.date>0){
        d = new Date(parseInt(req.params.date));
        return res.json({
          unix:parseInt(req.params.date),
          utc: d.toUTCString()
        })
      }else{
        d = new Date(req.params.date);
      }
    }else{
      d = new Date();
    }
    
    if(d=='Invalid Date'){
      throw 'Invalid Date';
    }
    res.json({
      unix:d.getTime(),
      utc:d.toUTCString()
    })
  }catch (e){
    console.error(e);
    res.json({
      error:e,
    })
  }
}

module.exports = {
  dateHandler,
};