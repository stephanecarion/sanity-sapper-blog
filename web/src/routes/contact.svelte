<script>
	import { get } from "svelte/store";
	import { Field, valuesForm } from 'svelte-formly';
  
	const fields = [
	  {
		type: "text",
		name: "username",
		id: "username",
		validation: ["required"],
		messages: {
		  required: "Username is required!"
		}
	  },
	  {
		type: "email",
		name: "email",
		id: "email",
		validation: ["required", "email"],
		messages: {
		  required: "E-mail is required!"
		}
	  }
	];
  
	function onSubmit() {
	  const data = get(valuesForm);
	  if (data.isValidForm) {
		const values = data.values;
		console.log('values', values);
	  }
	}
  </script>

<svelte:head>
	<title>Contact</title>
</svelte:head>

<h1>Contactez-nous</h1>

<p>Formulaire</p>

<form on:submit|preventDefault="{onSubmit}">
	<svelte:component this="{Field}" {fields} />
	<button type="submit">Submit</button>
  </form>

