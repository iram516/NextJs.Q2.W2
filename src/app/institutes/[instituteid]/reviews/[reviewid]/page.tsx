export default function reviewdetail({ params }:{
  params: {
    instituteid: string
    reviewid: string
  }
}) {
  return (<h1>
    Review {params.reviewid} for intstitute {params.instituteid}
  </h1>)
}