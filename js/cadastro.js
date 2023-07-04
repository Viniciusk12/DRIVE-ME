function mostrarCampoAdicional() {
  const servicosSelect = document.getElementById("servicos");
  const campoAdicional = document.getElementById("campoAdicional");

  // Limpar o campo adicional sempre que houver uma mudança
  campoAdicional.innerHTML = "";

  // Verificar a opção selecionada
  const servicoSelecionado = servicosSelect.value;

  // Se "Tours" for selecionado, mostrar opções de tours
  if (servicoSelecionado === "TOUR") {
    campoAdicional.innerHTML = `
      <label for="opcoesTours">Opções de Tours:</label>
      <select id="opcoesTours" name="OPCIONES DE TOUR" required>
        <option value="" disabled selected>Selecione uma opção</option>
        <option value="BODEGAS">Adegas</option>
        <option value="Show de Tango">Show de Tango</option>
        <option value="Museos">Museus</option>
        <option value="Montevideo">Montevideo</option>
        <option value="Punta del Este">Punta del Este</option>
        <option value="Colonia del Sacramento">Colonia del Sacramento</option>
        <option value="Personalizado">Personalizado (Informar em Aclarações)</option>
      </select><br><br>
    `;
  }
  // Se "Transporte" for selecionado, mostrar opções de transporte
  else if (servicoSelecionado === "TRASLADO") {
    campoAdicional.innerHTML = `
      <label for="opcoesTransporte">Opções de Transporte:</label>
      <select id="opcoesTransporte" name="OPCIONES DE TRASLADO" required>
        <option value="" disabled selected>Selecione uma opção</option>
        <option value="Montevideo">Montevideo</option>
        <option value="Punta del Este">Punta del Este</option>
        <option value="Colonia del Sacramento">Colonia del Sacramento</option>
        <option value="Aeropuerto">Aeroporto</option>
        <option value="Personalizado">Personalizado (Informar em Aclarações)</option>        
      </select><br><br>
    `;
  }
}
