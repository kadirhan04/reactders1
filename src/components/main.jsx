
import Card from './card';
/*
! jsx (Javascript XML)
*react tarafından kullanılan söz dizimi
*Ksx js içerisinde html benzeri bir yapıyla arayüz tanımlamaya yarar.

*html den farkları;
*{} doğrudan jsx içerisine js kodu yazabiliyoruz
*className ;sınıf tanımlanırken class yerine kulanılır
*inline css:{{}}iki parantaez içinde olmalı
* <div /> bütün etiketler kendi içinde self closin olabilir içinde herhangi birsy yazmayanlarda
*input img br kapanış etiketi gerekli/>
*olay izleme olayları direk etikete tanımlıyoz eventler
*fonksiyo uzunsa yukarıda tanımlayıp asagıda kullanırız23/40str
<> kullanılır class verilmeyecekse
*

*/
function Main() {
  const text = "sayfaya hoşgeldin";

  const url = "";//47 str

  const formatText = (uzunYazı) => {
    return uzunYazı.slice(0, 20) + "...";
  };
  const selamla = () => {
    alert("merhaba");
  };

  const status = "loading"; //eror-succes
  return (
    <main>
      <h3>{text}</h3>
      <p className="text-area">{formatText("merhaba gününüz nasıl gecti")}</p>
      <div
        style={{ backgroundColor: "red", height: "100px", margin: "30px" }}
      ></div>

      {/*cardlar*/}
      <div className='wrapper'>
      <Card  image="" category ="giyim" tittle="hoddle"/>
      <Card image="" category ="elektronik" tittle="spam"/>
      </div>
      {/*}
      <img src={url} width={400} />
      <input
        onChange={(e) => {
          console.log(e.target.value); 
        }}
      />

      <button
        onclick={() => {
          alert("selam naber");
        }}
      >
        gonder
      </button>
      <button onclick={selamla}>selamlar</button>

      {/*birden fazla kosul varsa str29str*/}
      {status === "loading" ? (
        <p>yukleniyor:</p> )
         : status==='error1'?( 
             <p>uzgunuz bir hata olustu</p>
      ) :(
        <p>veri basarıylA ALINDI</p>
      )}
    </main>
  );
}
export default Main;
