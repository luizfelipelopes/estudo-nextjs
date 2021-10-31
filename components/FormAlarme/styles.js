import styled from "styled-components";

export const FormsAlarme = styled.body`

form{
    background: rgba(0,128,0, 0.1);
    padding: 30px;
    display: flex;
    flex-wrap: wrap;
    max-width: 500px;
    margin: auto;
    border-radius: 20px;
}

form label, form select, form input[type=text] {
    width: 100%;
}

form select, form input {
    // padding: 10px 0;
    padding-left: 5px;
    // margin-top: 10px;
    border-radius: 5px;
}

.form-group{
    width:100%;
    margin-bottom: 20px;
}

.form-group label {
    width: 100%;
}

.form-group .group-radio {
    width: 100%;
    // display: flex;
    justify-content: space-between;
}


`;