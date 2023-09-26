<script lang="ts">
    import {Gitlab, type DiscussionSchema, type ProjectSchema, type DiscussionNoteSchema} from '@gitbeaker/rest'
	import { writable } from 'svelte/store';
    const api = new Gitlab({
        token: 'glpat-vvjrhxHyR9-deHhGTUfd'
    });
    const notes = writable<DiscussionNoteSchema[]>([]);
    //api.Projects.show('50732431').then((p: ProjectSchema) => console.log());
    
    api.IssueDiscussions.all('50732431', 1).then((discussions) => {
        discussions.forEach(discussion => {
            if(discussion.individual_note && discussion.notes) {
                notes.update((prev) => {
                    if(discussion.notes){
                        return [...prev, ...discussion.notes ]
                    }
                    return [...prev];
                    
                })
            }
        });
    });
    $: console.log($notes);

    

</script>
<ul>
    {#each $notes as note}
    <li>{note.body}</li>
{/each}
</ul>
