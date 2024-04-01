<script lang="ts">
	import { onMount } from 'svelte';
	import { useChat } from 'ai/svelte';
	const { input, handleSubmit, messages } = useChat();
	let messagesEnd: HTMLElement;

	onMount(() => {
		scrollToBottom();
	});

	$: $messages, scrollToBottom();

	function scrollToBottom() {
		if (messagesEnd) {
			messagesEnd.scrollIntoView({ behavior: 'smooth' });
		}
	}
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<div class="flex flex-col">
	<!-- <div class="text-3xl mb-4">useChat</div> -->
	<div class="flex flex-col overflow-auto mb-auto" style="padding-bottom: 5rem;">
		{#each $messages as message (message.id)}
			<div class={message.role === 'assistant' ? 'chat chat-start' : 'chat chat-end'}>
				<div class="chat-image avatar">
					<div class="w-10 rounded-full">
						<img
							alt="Chat avatar"
							src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
						/>
					</div>
				</div>
				<div class="chat-header">
					{message.role}
					<time class="text-xs opacity-50">12:45</time>
				</div>
				<div
					class={message.role === 'assistant'
						? 'chat-bubble bg-primary text-primary-content'
						: 'chat-bubble'}
				>
					{message.content}
				</div>
				<div class="chat-footer opacity-50">Delivered</div>
			</div>
		{/each}
		<div bind:this={messagesEnd}></div>
	</div>
	<form on:submit={handleSubmit} class="fixed inset-x-0 bottom-0 bg-base-300 py-4 px-4">
		<div class="flex gap-2 items-center max-w-3xl mx-auto">
			<input
				type="text"
				placeholder="Ask something"
				class="input w-full input-bordered focus:outline-none"
				bind:value={$input}
			/>
			<button type="submit" class="btn btn-primary">Send</button>
		</div>
	</form>
</div>
