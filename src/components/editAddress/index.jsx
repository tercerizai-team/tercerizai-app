import { MenuItem, Select, TextField } from "@mui/material"
import { useState } from "react";
import { FormNewAddress } from "./styles"


function EditAddressUser (props) {

    const {id, state, street, district, number, complement, city, zipCode, name} = props.address

    const [estado, setEstado] = useState('');

    const handleChange = (event) => {
        setEstado(event.target.value);
    };


    return (
        <FormNewAddress>
            
            <h2>Editar endereço</h2>
            <TextField id="outlined-basic" label="Rua" variant="outlined" defaultValue={street} />
            <div>
                <TextField id="outlined-basic" label="Número" variant="outlined" defaultValue={number}/>
                <TextField id="outlined-basic" label="Complemento" variant="outlined" defaultValue={complement}/>
            </div>
            <TextField id="outlined-basic" label="Bairro" variant="outlined" defaultValue={district}/>
            <TextField id="outlined-basic" label="Cidade" variant="outlined" defaultValue={city}/>
            <div>
                <Select
                    labelId="uf-label"
                    id="uf"
                    value={estado}
                    label="Age"
                    onChange={handleChange}
                    displayEmpty
                    sx={{ minWidth: 225 }}
                >
                    <MenuItem value="">
                        <em>UF</em>
                    </MenuItem>
                    <MenuItem value={'AC'}>AC</MenuItem>
                    <MenuItem value={'AL'}>AL</MenuItem>
                    <MenuItem value={'AP'}>AP</MenuItem>
                    <MenuItem value={'AM'}>AM</MenuItem>
                    <MenuItem value={'BA'}>BA</MenuItem>
                    <MenuItem value={'CE'}>CE</MenuItem>
                    <MenuItem value={'ES'}>ES</MenuItem>
                    <MenuItem value={'GO'}>GO</MenuItem>
                    <MenuItem value={'MA'}>MA</MenuItem>
                    <MenuItem value={'MT'}>MT</MenuItem>
                    <MenuItem value={'MS'}>MS</MenuItem>
                    <MenuItem value={'MG'}>MG</MenuItem>
                    <MenuItem value={'PA'}>PA</MenuItem>
                    <MenuItem value={'PB'}>PB</MenuItem>
                    <MenuItem value={'PR'}>PR</MenuItem>
                    <MenuItem value={'PE'}>PE</MenuItem>
                    <MenuItem value={'PI'}>PI</MenuItem>
                    <MenuItem value={'RJ'}>RJ</MenuItem>
                    <MenuItem value={'RN'}>RN</MenuItem>
                    <MenuItem value={'RS'}>RS</MenuItem>
                    <MenuItem value={'RO'}>RO</MenuItem>
                    <MenuItem value={'RR'}>RR</MenuItem>
                    <MenuItem value={'SC'}>SC</MenuItem>
                    <MenuItem value={'SP'}>SP</MenuItem>
                    <MenuItem value={'SE'}>SE</MenuItem>
                    <MenuItem value={'TO'}>TO</MenuItem>
                    <MenuItem value={'DF'}>DF</MenuItem>
                </Select>

                <TextField id="outlined-basic" label="CEP" variant="outlined" defaultValue={zipCode}/>
            </div>
            <button>Cadastrar</button>
            
        </FormNewAddress>
    )
}

export default EditAddressUser