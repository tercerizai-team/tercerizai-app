import { Button, FormHelperText, MenuItem, Select, TextField } from "@mui/material"
import { useState } from "react";
import { FormNewAddress } from "./styles"
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';


function NewAddress () {

    const [estado, setEstado] = useState('');

    const handleChange = (event) => {
        setEstado(event.target.value);
    };

    const formSchema = yup.object().shape({
        street: yup
            .string()
            .required('Rua obrigatório'),
        number: yup
            .string()
            .required('Número obrigatório'),
        complement: yup
            .string(),
        district: yup
            .string()
            .required('Bairro obrigatório'),
        city: yup
            .string()
            .required('Cidade obrigatório'),
        zipCode: yup
            .string()
            .required('CEP obrigatório')
            .matches('^[0-9]{8}$', 'Somente números'),
    })

    const [error, setError] = useState(true)

    const {register, handleSubmit, formState: { errors },} = useForm({resolver: yupResolver(formSchema)})

    const onSubmit = (data) => {
        console.log(data)
    }


    return (
        <FormNewAddress onSubmit={handleSubmit(onSubmit)}>
            
            <h2>Cadastre um novo endereço</h2>
            <TextField error={!!errors.street} id="outlined-basic" label="Rua*" variant="outlined" {...register('street')}/>
            <div>
                <TextField error={!!errors.number} id="outlined-basic" label="Número*" variant="outlined" {...register('number')}/>
                <TextField error={!!errors.complement}  id="outlined-basic" label="Complemento" variant="outlined" {...register('complement')}/>
            </div>
            <TextField error={!!errors.district} id="outlined-basic" label="Bairro*" variant="outlined" {...register('district')}/>
            <TextField error={!!errors.city} id="outlined-basic" label="Cidade*" variant="outlined" {...register('city')}/>
            <div>
                <Select
                    error={!!errors.state}
                    labelId="uf-label"
                    id="uf"
                    value={estado}
                    label="UF"
                    onChange={handleChange}
                    displayEmpty
                    sx={{ minWidth: 225 }}
                    {...register('state')}
                >
                    <MenuItem value="">
                        <em>UF*</em>
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

                <TextField error={!!errors.zipCode} id="outlined-basic" label="CEP*" variant="outlined" {...register('zipCode')}/>
            </div>
            <Button variant="contained" type="submit">Cadastrar</Button>
            
            
        </FormNewAddress>
    )
}

export default NewAddress