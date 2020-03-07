// LOCAL STORAGE
// {
   // key: 3,
   // time: 123321312
// }

// VERIFY IF DATA HAS BEEN FETCHED
const { data } = localStorage;

// CONDITION TO PUT DATA ON MY STATE TREE
if(data && data.time < (time.now() + 30000)) {
    request();
} else {
    dispatch(action(data));
}
