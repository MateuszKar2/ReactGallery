import { Button } from "./Button/Button";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { ImageGalleryItem } from "./ImageGalleryItem/ImageGalleryItem";
import { Loader } from "./Loader/Loader";
import { Modal } from "./Modal/Modal";


export const App = () => {
  return(
    <>
    <ImageGallery>
      <ImageGalleryItem images={"images"} onClick={"imageClicked"}/>
    </ImageGallery>
    <Loader/>
    <Button
      loadMoreButton={"loadMoreButton"} titleButton={"Load more"}>
    </Button>
    <Modal closeModalByEscape={"closeModalByEscape"} closeModalByOverlay={"closeModalByOverlay"} src={"modalURL"} alt={"query"}/>
    </>
  )
};