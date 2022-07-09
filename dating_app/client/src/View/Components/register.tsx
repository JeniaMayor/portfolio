import axios from "axios";
import { useNavigate } from "react-router-dom";
interface Registerprops {
    showRegister: boolean,
    setShowRegister: Function
}

const Register = (props: Registerprops) => {
    const { showRegister, setShowRegister } = props
    const navigate = useNavigate()
    async function handleRegister(ev: any) {
        ev.preventDefault();
        try {
            const username = ev.target.elements.userName.value;
            const password = ev.target.elements.password.value;
            const name = ev.target.elements.fullName.value;
            const age = ev.target.elements.age.value;
            const profileImg = ev.target.elements.profileImg.value;
            const description = ev.target.elements.description.value;
            const gender = ev.target.elements.gender.value;
            const img1 = ev.target.elements.img1.value;
            const img2 = ev.target.elements.img2.value;
            const user = { name, age, gender, profileImg, description, password, username, img1, img2 }
            


            const { data } = await axios.post('/api/addUser', { user });

            console.log(data)


            if (data.ok === true) {
                setTimeout(() => {
                    setShowRegister(!showRegister);
                }, 1500);
            } else {

            }


        } catch (error) {


        }

    }

    return (

        <div className="register">
            <form className="register__form" onSubmit={handleRegister}>
                <input type="text" name="userName" placeholder="User Name" />
                <input type="password" name="password" placeholder="PassWord" />
                <input type="text" name="fullName" placeholder="Full Name" />
                <input type="text" name="age" placeholder="Age" />
                <input type="text" name="description" placeholder="quick description" />
                <input type="text" name="profileImg" placeholder="Profile Pic" />
                <input type="text" name="img1" placeholder="first pic" />
                <input type="text" name="img2" placeholder="second pic" />
                <select name="gender" >
                    <option hidden>Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>

                <input type="submit" value="Register" />
            </form>
        </div>

    )

}
export default Register