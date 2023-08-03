// Modal - Girş ve kayıt formunun index sayfasında açılması için
// login butonu için
document.getElementById('open-login').addEventListener('click', function() {
    openModal();
  });
  
  // register butonu için
  document.getElementById('open-register').addEventListener('click', function() {
    openModal();
  });
  
  function openModal() {
    var modal = document.getElementById('myModal');
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Sayfa kaydırmasını engelle
  }
  
  // Kapatma düğmesi
  document.getElementsByClassName('btn-close')[0].addEventListener('click', function() {
    document.getElementById('myModal').style.display = 'none';
    
  });
  
  // Dışarı tıklamayla kapatma
  window.addEventListener('click', function(event) {
    var modal = document.getElementById('myModal');
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  });
  

// Navbarda Kayıt Olma ve Üye Girişi İçin
// Sayfa yüklendiğinde çalışacak işlemler
document.addEventListener("DOMContentLoaded", function () {
    // Gizlemek/göstermek istediğimiz divi ve bağlantıyı alıyoruz
    var register = document.getElementById("top-register");
    var login = document.getElementById("top-login");
    var registerText = document.getElementById("top-register-text");
    var loginText = document.getElementById("top-login-text")
    var openLogin = document.getElementById("open-login");
    var openRegister = document.getElementById("open-register");


    var elements = [register,login,registerText,loginText]
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.display = "none";
      }



    // Link üzerine tıklandığında işlemi gerçekleştiren fonksiyon
    openLogin.addEventListener("click", function () {
        login.style.display = "block";
        registerText.style.display = "inline-block";
        register.style.display = "none";
        loginText.style.display = "none";
    }
    );
    openRegister.addEventListener("click", function () {
        register.style.display = "block";
        loginText.style.display = "inline-block";
        login.style.display = "none";
        registerText.style.display = "none";
    }  
    );
    loginText.addEventListener("click", function () {
        login.style.display = "block";
        registerText.style.display = "inline-block";
        register.style.display = "none";
        loginText.style.display = "none";
    }
    );
    registerText.addEventListener("click", function () {
        register.style.display = "block";
        loginText.style.display = "inline-block";
        login.style.display = "none";
        registerText.style.display = "none";
    }
    );
});




// Slide Text
function setupAnimationCycle() {
    const pElements = document.getElementsByClassName("text");
    
    let nextIndex = 0;

    function nextCycle() {
      const currentIndex = nextIndex;
      const currentElement = pElements[currentIndex];
      currentElement.classList.add("show");
      setTimeout(() => {
        currentElement.classList.remove("show");
        nextIndex = nextIndex >= pElements.length - 1 ? 0 : nextIndex + 1;
        nextCycle();
      }, 6000); // 6 saniye bekledikten sonra (6000 ms), bir sonraki döngüye geçer.
    }
    nextCycle();
}
setupAnimationCycle();


// Geçiş sonrası beklemenin süresi (milisaniye cinsinden)
const waitingTime = 500; // 500ms = 0.5 saniye

// Tekerleği yönetmek için bir değişken
let isScrolling = false;

// Tekerleğin kaydırılmasını yönetmek için bir işlev
function handleScroll() {
    const sections = ["top", "search", "save", "shop", "bottom"];
    let currentSectionIndex = sections.indexOf(window.location.hash.slice(1));

    // URL'deki kısmi kimliğe göre başlangıç ​​bölümünü belirleme
    if (currentSectionIndex === -1) {
        currentSectionIndex = 0;
        window.location.href = `#${sections[currentSectionIndex]}`;
    }

    window.addEventListener("wheel", function (e) {
        if (!isScrolling) {
            isScrolling = true;

            setTimeout(() => {
                if (e.deltaY > 0) {
                    // Aşağı kaydırma
                    if (currentSectionIndex < sections.length - 1) {
                        currentSectionIndex++;
                        window.location.href = `#${sections[currentSectionIndex]}`;
                    }
                } else if (e.deltaY < 0) {
                    // Yukarı kaydırma
                    if (currentSectionIndex > 0) {
                        currentSectionIndex--;
                        window.location.href = `#${sections[currentSectionIndex]}`;
                    }
                }

                // Bekleme süresinden sonra tekrar kaydırmaya izin verme
                setTimeout(() => {
                    isScrolling = false;
                }, waitingTime);
            }, 0); // Burada scroll işlemini geciktirmeden 0ms içinde yapacağız
        }
    });
}

// Tekerleğin kaydırılmasını yöneten işlevi çağırma
handleScroll();


// Sayfada örneğin #search kısmındayken sayfayı yenilediğimizde ekranda sayfanın en üstüne gidiyoruz ancak url kısmı halen #search kaldığı için mouse tekerleği
// kaydırıldığında kötü görüntü oluşuyor, bunu engellemek için aşağıdaki kodu kullanıyoruz.

// Sayfa yüklendiğinde çalışacak kod
window.onload = function() {
  // Eğer URL "#" içeriyorsa ve sayfa ilk kez yükleniyorsa, "#" kısmını temizler ve sayfayı güncellenmiş URL ile tekrar yükler
  if (window.location.href.includes("#") && !sessionStorage.getItem("reloaded")) {
    const newURL = window.location.href.split("#")[0];
    history.replaceState({}, document.title, newURL);
    sessionStorage.setItem("reloaded", "true");
    window.location.href = newURL; // Sayfayı güncellenmiş URL ile yönlendirir
  } else {
    sessionStorage.removeItem("reloaded");
  }
};




// #Bottomda Kayıt Olma ve Üye Girişi İçin

// Sayfa yüklendiğinde çalışacak işlemler
document.addEventListener("DOMContentLoaded", function () {
    // Gizlemek/göstermek istediğimiz divi ve bağlantıyı alıyoruz
    var register = document.getElementById("bottom-register");
    var login = document.getElementById("bottom-login");
    var registerButon = document.getElementById("register-buton");
    var loginButon = document.getElementById("login-buton");

    login.style.display = "none";
    registerButon.style.display = "none";

    // Link üzerine tıklandığında işlemi gerçekleştiren fonksiyon
    loginButon.addEventListener("click", function () {
        login.style.display = "block";
        register.style.display = "none";
        registerButon.style.display = "inline-block";
        loginButon.style.display = "none"
    }
    );
    registerButon.addEventListener("click", function () {
        login.style.display = "none";
        register.style.display = "block";
        registerButon.style.display = "none";
        loginButon.style.display = "inline-block"
    }
);
});

