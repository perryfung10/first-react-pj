

function ReusableTitle({mainTitle, subTitle}) {
  return (
    <div>
         <h1 style={{backgroundColor: "orange", borderBottom: '3px solid red', textAlign: "center"}}>{mainTitle}</h1>
         <p>{subTitle}</p>
    </div>
  )
}

export default ReusableTitle