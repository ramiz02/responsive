import './index.css';
const Responsive = () => (
    <div className="background-container">
        <div>
        <h1 className="heading">My First Responsive Design Page</h1>
        <p className="text">Resize this responsive page to see the effect!</p>
        <div>
            <ul className="list-container">
                <li>
                <img src="https://i.ytimg.com/vi/DzWRPLa18uQ/maxresdefault.jpg" alt="phones" className="images-head"/>
                <p className="text">SMART PHONES IMAGE</p>
                </li>
                <li>
                <img src="https://th.bing.com/th/id/R.c7ebefe58e060d0615340c84d179db97?rik=EV3j35mZAFjz9Q&riu=http%3a%2f%2fstorage1.snappages.site%2fCPHJQN%2fassets%2fimages%2f6086880_1920x1080_2500.jpeg&ehk=kdVex9aMbz%2bA6xg1wC1xJjInbTm8M6A3MgvoUcVQllc%3d&risl=&pid=ImgRaw&r=0" alt="nature" className="images-head"/>
                <p className="text">NATURE IMAGES</p>
                </li>
                <li>
                <img src="https://media.cntraveler.com/photos/56556bab659c4b487486611e/master/pass/oia-santorini-greece-cr-alamy.jpg" alt="place" className="images-head"/>
                <p className="text">BEAUTIFUL PLACES</p>
                </li>
            </ul>
        </div>
        </div>

      
        <div className="container">
            <label id="input">Search What you want ?</label>
            <input type="text" className="inputl" id="input" placeholder="type your text"/>
        </div>
        <div>
            <h2>MOBILE IMAGEs</h2>
            <ul className="phonelist">
                <li><img src="https://image01.realme.net/general/20230613/1686628327928ed45b2eaa8e0461b84b9ccb33f1a1f14.png?width=1440&height=1440&size=706351" alt="phones" className="images"/></li>
                <li><img src="https://th.bing.com/th/id/R.19774217926d26247319b72e4bee5a63?rik=kcVAHV1Ug6gavg&riu=http%3a%2f%2fwww.pngall.com%2fwp-content%2fuploads%2f4%2fRealme-PNG.png&ehk=ozn1ln%2b02alN6fA89ibXABXg40%2buXp5OasY9rFLRm48%3d&risl=&pid=ImgRaw&r=0" alt="phones" className="images"/></li>
                <li><img src="https://th.bing.com/th/id/OIP.xHfBWCFFZneJwPKHDOeGRAHaIU?w=700&h=786&rs=1&pid=ImgDetMain" alt="phones" className="images"/></li>
                <li><img src="https://image05.realme.net/general/20200225/1582623237315.jpg" alt="phones" className="images"/></li>
                <li><img src="https://th.bing.com/th/id/OIP.9vcvkPlxVFTuZFR73mHcZgHaHa?rs=1&pid=ImgDetMain" alt="phones" className="images"/></li>
                <li><img src="https://th.bing.com/th/id/OIP.pdmTc-drK5KX53eKWv9q0AHaHa?w=600&h=600&rs=1&pid=ImgDetMain" alt="phones" className="images"/></li>
                <li><img src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/2600be113930417.603190b8e54cd.jpg" alt="phones" className="images"/></li>
            </ul>
        </div>

        <div>
            <h2>NATURE IMAGES</h2>
            <ul className="phonelist">
                <li><img src="https://th.bing.com/th/id/OIP.aL9ap7kxo02xpexoOhRcEAHaEK?rs=1&pid=ImgDetMain" alt="phones" className="images"/></li>
                <li><img src="https://wallpapercave.com/wp/wp2506866.jpg" alt="phones" className="images"/></li>
                <li><img src="https://wallpapercave.com/wp/wp2506838.jpg" alt="phones" className="images"/></li>
                <li><img src="https://th.bing.com/th/id/R.6f442ee6df5cf3ccf2a1eee96064f987?rik=Pas5705URUKaAQ&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2ff%2f6%2f6%2f1199690-4k-ultra-hd-nature-wallpaper-3840x2160-for-android-50.jpg&ehk=XnBoqrBdnfvdRVc5VoOt0tZzzhiXJ%2f9hxZq%2bZpBmq0o%3d&risl=&pid=ImgRaw&r=0" alt="phones" className="images"/></li>
                <li><img src="https://wallpaperaccess.com/full/31213.jpg" alt="phones" className="images"/></li>
                <li><img src="https://w0.peakpx.com/wallpaper/879/513/HD-wallpaper-lavender-rainbow-lakes-colours-ponds-forests-trees-blue.jpg" alt="phones" className="images"/></li>
                <li><img src="https://i.pinimg.com/736x/2e/84/43/2e8443eb60c6be2094cee31da9d6c87c.jpg" alt="phones" className="images"/></li>
            </ul>
        </div>

        <div>
            <h2>BEAUTIFUL PLACES</h2>
            <ul className="phonelist">
                <li><img src="https://th.bing.com/th/id/R.b7a8a45e4d14e66146b1cf956e8620cf?rik=lI5gDJmbQUI7lw&riu=http%3a%2f%2fwww.travelhoundsusa.com%2fwp-content%2fuploads%2f2018%2f03%2f3-Best-Beautiful-Places-to-Visit-in-the-World-Iguazu-Falls.jpg&ehk=qWXcs%2fD1sd3ATKvl6u%2b2ZB0RenrBi6f6M55I%2fv6Mabo%3d&risl=&pid=ImgRaw&r=0" alt="phones" className="images"/></li>
                <li><img src="https://th.bing.com/th/id/OIP.2N7dUQUZXB4_ujP_AffyDQHaFj?rs=1&pid=ImgDetMain" alt="phones" className="images"/></li>
                <li><img src="https://th.bing.com/th/id/OIP.MccwuU06OvTsvjF9u8sC-AHaE7?rs=1&pid=ImgDetMain" alt="phones" className="images"/></li>
                <li><img src="https://media.cntraveler.com/photos/56549f67659c4b48748655f8/master/pass/benagil-sea-cave-algarve-portugal-cr-getty.jpg" alt="phones" className="images"/></li>
                <li><img src="https://www.howardtravel.com/media/k2/items/cache/f60a47f7792630a3a86bc14c0657e89c_XL.jpg" alt="phones" className="images"/></li>
                <li><img src="https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters:format(jpg)/https://specials-images.forbesimg.com/dam/imageserve/1171238184/0x0.jpg%3Ffit%3Dscale" alt="phones" className="images"/></li>
                <li><img src="https://th.bing.com/th/id/R.2650e295b35a611bdbcac515d435da5e?rik=6KFA2Ov%2ftcQR5A&riu=http%3a%2f%2fmedia.cntraveler.com%2fphotos%2f56556b8d5e7aeb7a6e21834a%2fmaster%2fpass%2fzhangjiajie-forest-hunan-china-cr-getty.jpg&ehk=7yXUEf84g08mJ6XL%2b1qKc8lmi%2fS5JLMjrXW8lrWA8FY%3d&risl=&pid=ImgRaw&r=0" alt="phones" className="images"/></li>
            </ul>
        </div>
    </div>
)
export default Responsive
