import React from "react";
import Swiper from "react-id-swiper";

const defaultPhoto = {
  albumId: null,
  id: null,
  title: null,
  url: null,
  thumbnailUrl: null
};

const PostAlbumWork = ({ photo = defaultPhoto }) => {
  const params = {
    spaceBetween: 10,
    slidesPerView: 7,
    paginationClickable: true,
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    loop: true
  };

  return (
    <Swiper {...params}>
      {photo ? (
        photo.map(singlePhoto => {
          return (
            <div key={singlePhoto.id}>
              <img
                style={{
                  margin: 20,
                  marginTop: 40,
                  marginBottom: 50,
                  marginLeft: 29
                }}
                src={singlePhoto.thumbnailUrl}
                alt="Hi"
              ></img>
            </div>
          );
        })
      ) : (
        <></>
      )}
    </Swiper>
  );
};
export default PostAlbumWork;
