const isISO_8601 = dateString => /\d{4}-\d{2}-\d{2}/g.test(dateString)

module.exports = ({params: {date = Date.now()}}, res) => {
  //pass along to Date if it's ISO-8601, otherwise parse to number assuming it's a valid unix timetamp    
  try{
  const parsedDate = new Date( isISO_8601(date) ? date : +date)   
  res.json({
      unix: parsedDate.getTime(), utc: parsedDate.toUTCString()
    })
  } catch(e){
    res.json({
      unix: null, utc: "Invalid Date"
    })
  }
}