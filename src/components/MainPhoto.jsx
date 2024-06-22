import SimpleImageSlider from "react-simple-image-slider"

const images = [
  {
    url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/25/cf/17/b8/lpod-water-park.jpg?w=500&h=-1&s=1",
  },
  {
    url: "https://www.timeoutbahrain.com/cloud/timeoutbahrain/2021/09/16/2016_1_familyfun_base.jpg",
  },
  {
    url: "https://www.timeoutbahrain.com/cloud/timeoutbahrain/2021/09/16/2014_kids_1_base-1.jpg",
  },
  { url: "https://www.ootlah.com/wp-content/uploads/2018/07/2-13.jpg" },
  {
    url: "https://www.flyin.com/common/themes/v2/img/bahrain/home-Banner-Slider/banner-6.jpg",
  },
  {
    url: "https://www.citycentrebahrain.com/-/media/ccb/category-listing-page-banner/magic-planet.jpg",
  },
  {
    url: "https://platinumlist.net/guide/wp-content/uploads/2023/11/The-Avenues-NYE-Fireworks.jpg",
  },
]

const MainPhoto = () => {
  return (
    <div style={{ marginTop: "15px", marginRight: "30px" }}>
      <SimpleImageSlider
        width={500}
        height={300}
        images={images}
        showBullets={true}
        style={{ backgroundSize: "contain", backgroundRepeat: "no-repeat" }}
        autoPlay={true}
        showNavs={true}
        slideDuration={0.8}
      />
    </div>
  )
}

export default MainPhoto
