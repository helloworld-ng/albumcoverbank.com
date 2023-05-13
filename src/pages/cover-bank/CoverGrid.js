import React from "react"
import { useNavigate } from "react-router-dom"
import { App } from "../../animations/Canvas/index"

// CSS IMPORT
import classes from "./CoverBank.module.scss"

//COMPONENTS
import ProgressiveImg from "../../components/progressiveImg"

export default function CoverGrid({
  covers,
  imgRef,
  wrapperRef,
  setSelectedCover,
  setOpenModal,
}) {
  const navigate = useNavigate()
  console.log(covers)
  return (
    <>
      <div className={classes.coverGrid}>
        {covers &&
          covers.map((cover) => (
            <div key={cover.id}>
              <figure ref={imgRef}>
                <ProgressiveImg
                  src={cover?.fields?.Cover[0]?.thumbnails?.full?.url}
                  wrapperRef={wrapperRef}
                  cover={cover}
                  imgRef={imgRef}
                  App={App}
                  alt="album cover"
                  width="240"
                  height="211"
                  setOpenModal={setOpenModal}
                  setSelectedCover={setSelectedCover}
                  placeholderSrc="data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
                />
              </figure>
              <p> {cover?.fields?.Album} </p>
              <span>
                {cover.fields["Designers copy"]
                  ? cover.fields["Designers copy"]
                  : "N/A"}
              </span>
            </div>
          ))}
      </div>
    </>
  )
}
