<template>
    <div class="layout">
        <h2>布局</h2>
        <d-row tag="div" :gutter="20" >
            <d-col tag="span" :span="6" >
                <div style="background: red;">11</div>
            </d-col>
            <d-col tag="span" :span="6" >
                <div style="background: blue;">22</div>
            </d-col>
            <d-col tag="span" :span="6" >
                <div style="background: pink;">33</div>
            </d-col>
        </d-row>
        <d-row tag="div" justify="end">
            <d-col tag="span" :span="6" >
                <div style="background: red;">11</div>
            </d-col>
            <d-col tag="span" :span="6" >
                <div style="background: blue;">22</div>
            </d-col>
            <d-col tag="span" :span="6" >
                <div style="background: pink;">33</div>
            </d-col>
        </d-row>
    </div>
</template>

<script>

</script>

<style lang="scss" scoped>

</style>