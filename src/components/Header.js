//birlesen olusturm a components
/*kullanıcı arayuzu oluşturmsk için kulanılan temel yapı tassslaarı
bir fonksiyon olustur
ardından fonksiyon isimine birlesen ismi verilir
birlesenismi her zanman büyük harfle baslanır
iki kelimeliyse ikinci kelime ilk harf büyük
ibrrleşkenler return satırında kullanıcının göreceği ara yüzü döndürmek zorundaddır(jsx js xml)
jsx kodu tek bir kapsayıcıya sahip olmalıdır/or div yan yana yazılmaz yazarsak kapsayıcı gerekir
*/
//apiden gelmiş gibi dusun
//if else sadece return dısı kulanabilir
//asagıda renderın kullanımı
function Header(){
  const isLogged = true;
  //apiden gelen kullanıcı
  const userName =null;
 return(
   <header>
    <div>
        <h1>merhaba</h1>
        {/* v operator username varsa ekrana bas yoksa null*/}
        {userName & <b>{userName}</b>}
        {/*ternaryile kosullu renderlama*/}
        {isLogged ===true ?(
          <button style={{ background:'red'}}>cıkıs yap</button>
          ) :(
            <button style={{ background:'green'}}>giris yap</button>
          
         
        )}
    </div>
    </header> 
 )   
}
//bu birleseni app js de kullanmak içim export kuulan
export default Headers;