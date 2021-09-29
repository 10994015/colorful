window.onload = function(){
    var headerDom = document.getElementById('header');
    var footerDom = this.document.getElementById('footer');
    var imgslidesDom = this.document.getElementById('imgslides');
    var navDom = this.document.getElementById('nav');
    var urlHeader = '../HEADER/header.html';
    var urlFooter = '../FOOTER/footer.html';
    var urlImgslides = '../IMGSLIDES/imgslides.html';
    var urlNav = '../NAVIGATION/nav.html';

    function headerData(){
        return axios.get(urlHeader);
    }
    function footerData(){
        return axios.get(urlFooter);
    }
    function imgslidesData(){
        return axios.get(urlImgslides);
    }
    function navData(){
        return axios.get(urlNav);
    }
    
    axios.all([headerData(),footerData(),imgslidesData(),navData()]).then(axios.spread(function(header,footer,imgslides,nav){
        headerDom.innerHTML = header.data;
        footerDom.innerHTML = footer.data;
        imgslidesDom.innerHTML = imgslides.data;
        navDom.innerHTML = nav.data;
    }))
}