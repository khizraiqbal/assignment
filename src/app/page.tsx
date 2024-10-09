import Link from "next/link"




export default function Home (){
return(
<div>
  <div>Home Page</div> 

  

<div><Link  href="/about" target="_blank">  About  </Link></div>
<div><Link  href="/contact" target="_blank">Contact </Link></div>

  <div><Link  href="/services/web-development" target="_blank"> Services</Link></div>


</div>

)
};