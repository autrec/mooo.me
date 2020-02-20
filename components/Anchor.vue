<template>
    <a-anchor :offsetTop=10 :showInkInFixed="true" >
        <div v-for="(value, key) in anchors" :key="key">
            <a-anchor-link href="#二.环境依赖" title="二.环境依赖" >
                <a-anchor-link href="#1.git安装" title="1.git安装" />
            </a-anchor-link>   
        </div>
    </a-anchor>
</template>