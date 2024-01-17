# TODO

1. Install expo

2. Create the App link[https://docs.expo.dev/get-started/create-a-project/]
   `npx create-expo-app TOTO`

3. Run the app
   `npx expo start`

4. Take images from
   `https://undraw.co/illustrations`

5. Use React Navigation
   `https://reactnavigation.org/docs/getting-started/`

   `npm install @react-navigation/native`
   `npm install @react-navigation/native-stack`

6. React Native Documentation
   `https://reactnative.dev/docs/textinput`

7. https://www.postman.com/ to test the
   backend endpoints

8. Axios a HTTP Client
   https://axios-http.com/docs/intro
   `npm install axios`

9. Genymotion: Android Emulator on the Cloud and cross-platform
   `https://www.genymotion.com/`

10. State management `https://redux-toolkit.js.org/introduction/getting-started`

`npm install @reduxjs/toolkit`

11. EAS Build
    `https://docs.expo.dev/build/introduction/`

# Build .apk

`eas build --profile preview --platform android`

# Build .aab

`eas build --platform android`

# Build ios

`eas build --platform ios`

# here is REST full API cdoe using nodejs and expres

const expres = require ('xpress');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bosyParser.json());

# sample data (in memory storage)

let items =[{id:1, name: 'david'}, {id:2, name: 'divine},];

# get all items

app.get('/items', (req , res) =>{res.json(items);});

# get itema by id

app.get('/items/:id', (req , res) => {
const itemId = ParseInt(req.params.id);
const item = items.find(item => item.id === itemId);

    if(item){
        res.json(item);
        }
        else {
            res.status(404).json({error:'item not found'});

}
}
);

# create a new item

app.post('/item', (req, res) =>{
const newItem = req.body;
newItem.id = items.length + 1;
items.push(newItem);

    res.status(201).json(newItem);

});

# update an existing item

app.put('/item/:id', (req, res) =>{
const itemId = parseInt(req.params.id);
const updatedItem = req.body;

    items = items.map(item => (item.id === itemid ? updatedItem : item));

    res.json(updatedItem);

});

# delete an item

app.delete('/item/:id', (req, res) => {
const itemId = parseInt(req.params.id);
items = items.filter(item => item.id !== itemId);

    res.json({ messages: 'Items deleted successfully'});

});

# start the server

app.listen(PORT, () => {
console.log ('server is running on http://localhost:${PORT}');
});
