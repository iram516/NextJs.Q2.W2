export default function institutesdetails( { params} : { params:{ instituteid: string } })
{
  return (<h1>Details about Institute { params.instituteid}</h1>);
}