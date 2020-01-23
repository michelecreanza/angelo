console.log("corgi carousel connected to app.js!");

$(() => {
  let currentImgIndex = 0;
  $(".next").on("click", () => {
    $(".carousel-images")
      .children()
      .eq(currentImgIndex)
      .css("display", "none");
    currentImgIndex++;
    $(".carousel-images")
      .children()
      .eq(currentImgIndex)
      .css("display", "block");
  });

  $(".previous").on("click", () => {
    $(".carousel-images")
      .children()
      .eq(currentImgIndex)
      .css("display", "none");
    if (currentImgIndex > 0) {
      currentImgIndex--;
    } else {
      currentImgIndex = highestIndex;
    }
    $(".carousel-images")
      .children()
      .eq(currentImgIndex)
      .css("display", "block");
  });
});
