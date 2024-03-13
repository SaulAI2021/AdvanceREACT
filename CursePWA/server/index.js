const express = require('express');
const cors = require('cors');
const webpush = require('web-push');
//middlewares

const app = express();
app.use(cors());
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.listen(8000, ()=> console.log('Server in port 8000'));

app.get('/', async (req, res)=>{
  const payload = JSON.stringify({title: "probando notify",message : "okis"})
  try{
    await webpush.sendNotification(pushSubscription,payload);
    await res.send('enviado');
  }catch(e){
    console.log(e);
  }
});
app.post('/custom',(req, res)=>{
  const {title, message} = req.body;
  console.log(req.body);
  const payload = JSON.stringify({title,message});
  webpush.sendNotification(pushSubscription,payload);
  res.send('enviado');
})

app.post('/subscription',(req, res)=>{
  console.log(req.body);
})
const PublicKey = "BBz4asOwbOrOTTHEvr_qmEVrgwrARNJMo6sQUy6eR8hN1lvadL02w6JKr988vUvFLqWnsz07DuKB35CG5C25Q7I";
const PrivKey ="r0m3qrxJS4AiB4_Lq-QbjwMtp_kIqShLAMRdoMbCmlE";

const  pushSubscription = {
  endpoint: 'https://wns2-bn3p.notify.windows.com/w/?token=BQYAAAA1BufqufwsJKaZtD3dOlyHcYdojbT9xWApHEUITonmn5d4tAhZF2lAqZVgK6JDqGRKTDIELAII9f%2bejqWyEBV1PYMIHjwH2PQQE53HQzZWqqxvVn8sReSbn4P%2fCX1SljjfJp0q6%2bByhPpkxcrNMPtNddg7lW8GBxOuZFXoj7jgIDtfYCSQP6mjbtSs7ziytbcYkEyqHYMD3FXxQyMaFo0MMj5A1Q8PatssyiWw9bQFweukDB6wi6VLkvu79vUDm9T04nQ0MIjDnHu33shgKMvRvh9%2butr%2bhfTKMNKNmWpQvIxJeLFXG5P1%2fBk5faAsU9A%3d',
  expirationTime: null,
  keys: {
    p256dh: 'BGGfEfiFAx5cnQtf-iLkUTOKsGiCnLJAPX3u9uDj2ys3xItuznElDJAjmScyp5Co80IKIAHxRjAMvbv2LXzhr8o',
    auth: 'txOUvd5vbRrmCFp1x7GSKg'
  }
}

webpush.setVapidDetails(
  'mailto:user@example.org',
  PublicKey,
  PrivKey
)