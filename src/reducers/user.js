const initialState = {
    message: '等待',
    age: ' 20'
}


const user = (state = initialState , action) => {
    switch (action.type) {
        case   "FETCH_REQUEST":
            return {
                ...state,
                message: "请求中"
            }


        case "FETCH_SUCCESS":
            return {
                ...state,
                message: '詹姆斯'
            }
        case "FETCH_FAILURE":
            return {
                ...state,
                message: '请求失败'
            }
        default: return state;
    }
  }
  

export default user;
