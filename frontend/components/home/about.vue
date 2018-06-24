<template>
    <div class="about">
        <h2 class="about__header">About Me</h2>
        <p class="about__content">
            {{ content }}
        </p>
        <timeline class="about__timeline" width="100%" />
    </div>
</template>

<script>
    import Timeline from '@components/util/timeline'
    export default {
        name: 'about-section',
        components: {
          Timeline
        },
        props: {
          content: {
            default: () => ('Bacon ipsum dolor amet swine spare ribs ham, pork belly shoulder brisket strip steak venison meatloaf. Filet mignon tongue cow, tenderloin kielbasa jowl alcatra sirloin corned beef tri-tip spare ribs drumstick biltong short loin doner. Porchetta rump pork, filet mignon short ribs salami ham hock turkey frankfurter ribeye shoulder pork chop capicola pancetta jowl. Bresaola venison biltong ham hock drumstick short ribs turkey. Strip steak hamburger sausage chuck pork loin pancetta spare ribs sirloin meatball boudin jerky andouille ham hock buffalo ball tip. Frankfurter meatloaf chicken, ribeye t-bone pig rump kevin swine drumstick. Picanha tri-tip jerky turducken short ribs leberkas. Bacon ipsum dolor amet swine spare ribs ham, pork belly shoulder brisket strip steak venison meatloaf. Filet mignon tongue cow, tenderloin kielbasa jowl alcatra sirloin corned beef tri-tip spare ribs drumstick biltong short loin doner. Porchetta rump pork, filet mignon short ribs salami ham hock turkey frankfurter ribeye shoulder pork chop capicola pancetta jowl. Bresaola venison biltong ham hock drumstick short ribs turkey. Strip steak hamburger sausage chuck pork loin pancetta spare ribs sirloin meatball boudin jerky andouille ham hock buffalo ball tip. Frankfurter meatloaf chicken, ribeye t-bone pig rump kevin swine drumstick. Picanha tri-tip jerky turducken short ribs leberkas.')
          }
        },
    }
</script>

<style lang="scss" scoped>
    @import '~scss/variables';
    .about {
        display: grid;
        grid-template-columns: auto 300px;
        grid-template-rows: auto auto auto;

        min-height: 400px;
        color: $white;
        background-color: $primary;
        margin: 0;
        padding: 20px;
        padding-top: 25px;
    }

    .about__header {
        grid-row: 1;
        grid-column: 1 / span 2;

        font-family: Poppins;
        font-weight: 600;
        font-size: 32pt;
    }

    .about__content {
        grid-row: 2;
        grid-column: 1 / span 2;

        margin-top: 20px;
        font-family: Poppins;
        font-size: 12pt;
        line-height: 22px;
        font-weight: 300;
        float: left;
    }

    .about__timeline {
        grid-row: 3;
        grid-column: 1 / span 3;
    }
</style>