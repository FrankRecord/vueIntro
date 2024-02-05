import HelloWorld from "@/components/HelloWorld.vue";
import {createRouter, createWebHashHistory} from 'vue-router'
import DynamicRoute from "@/components/RouterQuery.vue";
import DynamicRouteParams from "@/components/RouterParams.vue";
import SubQuery from "@/components/subComponent/SubQuery.vue";
import LoginPage from "@/view/LoginPage.vue";
import CustomDirect from "@/components/subComponent/CustomDirect.vue";
import CreateVue from "@/view/CreateVue.vue";
import StartButton from "@/view/StartButton.vue";
import AnalyzeVueProject from "@/view/AnalyzeVueProject.vue";
import VueFeature from "@/view/VueFeature.vue";
import VueFeature2 from "@/view/VueFeature2.vue";
import MustacheUsage from "@/view/templateSyntax/MustacheUsage.vue";
import MustacheUsage1 from "@/view/templateSyntax/MustachUsage1.vue";
import MustacheUsage2 from "@/view/templateSyntax/MustachUsage2.vue";
import MustacheUsage3 from "@/view/templateSyntax/MustachUsage3.vue";
import DirectivesUsage from "@/view/templateSyntax/DirectivesUsage.vue";
import DirectivesInfo from "@/view/templateSyntax/DirectivesInfo.vue";
import DirectiveAttributeBinding from "@/view/templateSyntax/DirectiveAttributeBinding.vue";
import DirectRendering from "@/view/templateSyntax/DirectRendering.vue";
import DirectiveEventListner from "@/view/templateSyntax/DirectiveEventListner.vue";
import DemoFile from "@/components/DemoFile.vue";

const routes =[
    {
        name: "helloWorld",
        path: "/helloWorld",
        component: HelloWorld
    },{
        name: 'demo',
        path: '/demo',
        component: DemoFile,
        children: [
            {
                path: 'subQuery',
                name: 'subQuery',
                component: SubQuery
            }
        ]
    },{
        name: 'dynamic',
        path: '/dynamic',
        component: DynamicRoute
    },{
        name: 'dynamicByParams',
        path: '/dynamicByParams/:name',
        component: DynamicRouteParams
    },{
        name: 'loginPage',
        path: '/',
        component: LoginPage
    },{
        path: '/direct',
        component: CustomDirect
    },{
        path: '/createVue',
        component: CreateVue
    },{
        path: '/startButton',
        component: StartButton
    },{
        path: '/analyzeProject',
        component: AnalyzeVueProject
    },{
        path: '/vueFeature',
        component: VueFeature
    },{
        path: '/vueFeature2',
        component: VueFeature2,
    },{
        path: '/mustache',
        component: MustacheUsage,
        children: [{
            name: 'mustache1',
            path: 'TextInterpolation',
            component: MustacheUsage1
        },{
            name: 'mustache2',
            path: 'JavascriptExpression',
            component: MustacheUsage2
        },{
            name: 'mustache3',
            path: 'CallFunction',
            component: MustacheUsage3
        }]
    },{
        path: '/directive',
        component: DirectivesUsage,
        children: [{
            name: 'info',
            path: 'info',
            component: DirectivesInfo
        },{
            name: 'binding',
            path: 'binding',
            component: DirectiveAttributeBinding
        },{
            name: 'rendering',
            path: 'rendering',
            component: DirectRendering
        },{
            name: 'eventListener',
            path: 'eventListener',
            component: DirectiveEventListner
        }]
    }]

const router = createRouter({
    routes,
    history: createWebHashHistory()
})

export default router