let darkNav = $(".navbar")[0];
let lightNav = $(".navbar")[1];

// Prepend navigation bar
$("body").prepend(
  `
    <nav class="navbar navbar-expand-lg bg-dark border-bottom border-body" data-bs-theme="dark" style="background-color: #0A0C21 !important;">
      <div class="container-fluid">
        <a class="navbar-brand" href="index.html" style="width: 50%;">
          <img src="logos/logo-02.jpg" alt="Simply Tech Repair Logo" class="d-inline-block align-text-top rounded img-fluid simplyTechNavLogo" style="width: 50%;">
        </a>
        <div style="display: inline; width: 40%;">
          <a class="nav-item" aria-current="page" href="cell-phone-pricing.html" style="padding-right:2%; padding-left:2%;">
          <img src="iconography/bannerImage_iphone.svg" alt= "Cell Phone Services" class="d-inline-block align-text-top rounded img-fluid bannerNavigationImage"/></a>  
          <a class="nav-item" aria-current="page" href="tablet-pricing.html" style="padding-right:2%; padding-left:2%;">
            <img src="iconography/bannerImage_ipad.svg" alt="Tablet Services" class="d-inline-block align-text-top rounded img-fluid bannerNavigationImage"/></a>
          <a class="nav-item" aria-current="page" href="console-pricing.html" style="padding-right:2%; padding-left:2%;">
            <img src="iconography/bannerImage_gamingController.svg" alt="Game Console Services" class="d-inline-block align-text-top rounded img-fluid bannerNavigationImage"/></a>
          <a class="nav-item" aria-current="page" href="computer-pricing.html" style="padding-right:2%; padding-left:2%;">
            <img src="iconography/bannerImage_computerWithMonitor.svg" class="d-inline-block align-text-top rounded img-fluid bannerNavigationImage" alt="Computer Services"/></a>
        </div>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav me-auto">
            <li class="nav-item">
              <a class="nav-link homePage active" aria-current="page" href="index.html"><img src="iconography/home.jpg" class="img-fluid"/>Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link blogPageLink" aria-current="page" href="blog.html"><img src="iconography/blog.jpg" class="img-fluid"/>Blog</a>
            </li>
            <li class="nav-item">
              <a class="nav-link pricingPage" aria-current="page" href="pricing-overview.html"><img src="iconography/dollar.svg" class="img-fluid"/>Pricing</a>
            </li>
            <li class="nav-item">
              <a class="nav-link reviewPage" aria-current="page" href="reviews.html"><img src="iconography/reviews.svg" class="img-fluid"/>Reviews</a>
            </li>
            <li class="nav-item">
              <a class="nav-link policyPage" aria-current="page" href="privacy-policy-etc.html"><img src="iconography/icon-15.svg" class="img-fluid"/>Privacy Policy Etc</a>
            </li>            
            <li class="nav-item">
              <a class="nav-link checkRepairStatus" aria-current="page" href="check-repair-status.html"><img src="iconography/CheckRepairStatus.jpg" class="img-fluid"/>Repair Status</a>
            </li>
            <li class="nav-item">
              <a class="nav-link contactUsPage" aria-current="page" href="contact.html"><img src="iconography/email_dark.jpg" class="img-fluid"/>Contact Us</a>
            </li>
        </div>
      </div>
    </nav>
    `
);

// Check if a user is viewing the site on a mobile device
window.mobileCheck = function () {
  let check = false;
  (function (a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true; })(navigator.userAgent || navigator.vendor || window.opera);

  if (check) {
    // Increase carousal size
    $(".carousal-container").css("width", "100%");
    // Increase logo size
    $(".simplyTechNavLogo").css("width", "100%");
    // Show alternative carousal
    $(".alternative-to-carousal").show();
    // Hide Carousal
    $(".carousal-container").hide();
    // Change to mobile background wallpaper
    $("body").css({ "background-image": "url(wallpaper//mobile-background.svg)" });
    //$("body").css({ "background-position": "-225px" });
    $("body").css({ "background-size": "100% auto" });

    // Keep pricing table containers at 100% for mobile
    $(".pricing-tables-container .individual-service-pricing").css("width", "100%");
  }

  return check;
};

// Run Mobile Check
window.mobileCheck();
