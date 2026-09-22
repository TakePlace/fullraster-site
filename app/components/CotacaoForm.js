"use client";

import { useState } from "react";
import { WHATSAPP_NUMBER } from "../../lib/contact";

const ESTADOS = ["RS", "SC", "PR", "SP", "Outro"];
const TIPOS = ["Carro", "Moto", "Caminhão", "Barco", "Máquina agrícola", "Outro"];

export default function CotacaoForm() {
  const [form, setForm] = useState({
    estado: "",
    cidade: "",
    veiculo: "",
    nome: "",
    email: "",
    celular: "",
  });

  function update(field) {
    return (e) => setForm((f) => ({ ...f, [field]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const msg =
      `Olá! Gostaria de uma cotação de rastreamento.\n` +
      `Nome: ${form.nome}\n` +
      `Estado: ${form.estado}\n` +
      `Cidade: ${form.cidade}\n` +
      `Veículo: ${form.veiculo}\n` +
      `E-mail: ${form.email}\n` +
      `Celular: ${form.celular}`;
    const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
    window.open(href, "_blank", "noopener,noreferrer");
  }

  return (
    <form className="form-card" onSubmit={handleSubmit}>
      <div className="form-row">
        <label htmlFor="estado">Estado</label>
        <select id="estado" required value={form.estado} onChange={update("estado")}>
          <option value="">UF</option>
          {ESTADOS.map((uf) => (
            <option key={uf} value={uf}>
              {uf}
            </option>
          ))}
        </select>
      </div>
      <div className="form-row">
        <label htmlFor="cidade">Cidade</label>
        <input id="cidade" type="text" required placeholder="Cidade" value={form.cidade} onChange={update("cidade")} />
      </div>
      <div className="form-row">
        <label htmlFor="veiculo">Veículo</label>
        <select id="veiculo" required value={form.veiculo} onChange={update("veiculo")}>
          <option value="">Tipo</option>
          {TIPOS.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>
      <div className="form-row">
        <label htmlFor="nome">Nome</label>
        <input id="nome" type="text" required placeholder="Seu nome" value={form.nome} onChange={update("nome")} />
      </div>
      <div className="form-row">
        <label htmlFor="email">E-mail</label>
        <input id="email" type="email" required placeholder="seu@email.com" value={form.email} onChange={update("email")} />
      </div>
      <div className="form-row">
        <label htmlFor="celular">Celular</label>
        <input id="celular" type="tel" required placeholder="(51) 90000-0000" value={form.celular} onChange={update("celular")} />
      </div>
      <button type="submit" className="btn btn-orange form-submit">
        Solicitar cotação pelo WhatsApp
      </button>
    </form>
  );
}
