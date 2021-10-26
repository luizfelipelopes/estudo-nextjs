import styled from "styled-components";

export const FormsAlarme = styled.body`

form{
    background: rgba(255,255,255, 0.2);
    padding: 30px;
    display: flex;
    flex-wrap: wrap;
    max-width: 500px;
    margin: auto;
}

form label, form select, form input[type=text] {
    width: 100%;
}

form select, form input {
    padding: 10px 0;
    margin-top: 10px;
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
    display: flex;
    justify-content: space-between;
}


`;