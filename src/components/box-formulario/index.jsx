import React from 'react';
import InputMask from 'react-input-mask';
import { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function BoxFormulario() {
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [mensagem, setMensagem] = useState('');

  const form = useRef();

  const validateEmail = (input) => {
    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailPattern.test(input);
  };

  const handleChange = (e, setterFunction, validatorFunction = null) => {
    const inputValue = e.target.value;
    setterFunction(inputValue);

    if (validatorFunction) {
      validatorFunction(inputValue);
    }
  };

  const handleEmailChange = (inputEmail) => {
    setEmail(inputEmail);
    setIsValidEmail(validateEmail(inputEmail));
  };

  useEffect(() => {
    if (email === '') {
      setIsValidEmail(true);
    }
  }, [email]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: nome,
      message: mensagem,
      email: email,
      telefone: telefone
    }

    emailjs.send("service_1ugpqg9", "template_q7gkglp", templateParams, "brRGyQiGYVke7oATN")
      .then((response) => {
        setNome('')
        setEmail('')
        setTelefone('')
        setMensagem('')
        alert("Email enviado ! Em breve entraremos em contato, obrigado .")
      }, (err) => {
        console.log("ERRO: ", err)
      }
      )

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <form ref={form} className="box-formulario" onSubmit={handleSubmit} data-aos="fade-right" data-aos-duration='2000'>
      <div className="box-input-label-formulario">
        <label htmlFor="nome">Nome</label>
        <input
          type="text"
          id="nome"
          name="nome"
          value={nome}
          onChange={(e) => handleChange(e, setNome)}
          placeholder="Digite seu Nome"
          maxLength={50}
          required
        />
      </div>

      <div className="box-input-label-formulario">
        <label htmlFor="telefone">Telefone</label>
        <InputMask
          mask="(99) 99999-9999"
          id="telefone"
          name="telefone"
          className="input-profile-student"
          value={telefone}
          onChange={(e) => handleChange(e, setTelefone)}
          placeholder="Digite seu Telefone"
          required
        />
      </div>

      <div className="box-input-label-formulario">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => handleChange(e, setEmail, handleEmailChange)}
          placeholder="Digite seu Email"
          maxLength={45}
          required
        />
        {!isValidEmail && (
          <p style={{ color: 'red', fontSize: '12px' }}>Endereço de e-mail inválido</p>
        )}
      </div>

      <div className="box-input-label-formulario">
        <label htmlFor="mensagem">Mensagem</label>
        <textarea
          id="mensagem"
          name="mensagem"
          value={mensagem}
          onChange={(e) => handleChange(e, setMensagem)}
          placeholder="Digite o conteúdo do seu email"
          required
          maxLength={500}
        />
      </div>

      <button type="submit" className="button-formulario-enviar">
        Enviar!
      </button>
    </form>
  );
}
