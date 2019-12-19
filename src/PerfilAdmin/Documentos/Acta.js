import React from "react";
import ReactDOM from "react-dom";
import {
  BlobProvider,
  Document,
  Page,
  StyleSheet,
  Text,
  View
} from "@react-pdf/renderer";
import PSPDFKit from "./PSPDFKit";

import "./styles.css";

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4"
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});

// Create Document Component
const MyDocument = (
  <Document>
    <html><head><meta http-equiv="Content-Type" content="text/html;charset=utf-8" /><link href="style.css" rel="stylesheet" type="text/css" /><title>Unknown</title></head><body><div class="calibre" id="calibre_link-0">
	<table class="table_">
		<tbody class="calibre1"><tr class="calibre2">
			<td class="td_"><p class="block_"><img src="images/000000.png" alt="Image" class="calibre3" /></p></td>
			<td class="td_1"><p class="block_1">Acta de reunión</p></td>
		</tr>
	</tbody></table>
	<p class="block_2">Lugar: [Ubicación] </p>
	<p class="block_2">Fecha: [fecha].</p>
	<p class="block_2">Inicio de sesión: [hora de inicio].</p>
	<h1 class="block_3" id="calibre_link-1">Asistentes:</h1>
	<p class="block_4"> [lista de nombres de los asistentes].</p>
	<h1 class="block_3" id="calibre_link-2">Propósito:</h1>
	<p class="block_5">[Propósito]</p>
	<h1 class="block_3" id="calibre_link-3">Orden del día:</h1>
	<p class="block_5">[Lista de actividades planeadas]</p>
	<h1 class="block_3" id="calibre_link-4">Deliberaciones y acuerdos:</h1>
	<p class="block_5">[Lista de acuerdos y actividades realizadas]</p>
	<p class="block_6">&nbsp;</p>
	<h1 class="block_3" id="calibre_link-5">Cierre de la sesión:</h1>
	<p class="block_7">[hora de cierre]</p>
	<p class="block_6">&nbsp;</p>
	<p class="block_6">&nbsp;</p>
	<table class="table_1">
		<tbody class="calibre1"><tr class="calibre2">
			<td class="td_2"><h2 class="block_8" id="calibre_link-6">&nbsp;</h2></td>
			<td class="td_3"><h2 class="block_8" id="calibre_link-7">&nbsp;</h2></td>
			<td class="td_4"><h2 class="block_8" id="calibre_link-8">&nbsp;</h2></td>
		</tr>
		<tr class="calibre2">
			<td class="td_5"><h2 class="block_9" id="calibre_link-9">Grace Erandy Báez Hernández</h2></td>
			<td class="td_6"><h2 class="block_10" id="calibre_link-10">&nbsp;</h2></td>
			<td class="td_7"><h2 class="block_9" id="calibre_link-11">[Nombre secretaria]</h2></td>
		</tr>
		<tr class="calibre2">
			<td class="td_8"><h2 class="block_11" id="calibre_link-12">Presidente</h2></td>
			<td class="td_9"><h2 class="block_10" id="calibre_link-13">&nbsp;</h2></td>
			<td class="td_10"><h2 class="block_11" id="calibre_link-14">Secretaria</h2></td>
		</tr>
	</tbody></table>
	<p class="block_12">&nbsp;</p>

</div>

</body></html>
  </Document>
);

ReactDOM.render(
  <BlobProvider document={MyDocument}>
    {({ blob, url, loading, error }) => {
      if (blob) {
        return <PSPDFKit blob={blob} />;
      }

      if (error) {
        return error;
      }

      return <div>The PDF is rendering...</div>;
    }}
  </BlobProvider>,
  document.getElementById("root")
);
