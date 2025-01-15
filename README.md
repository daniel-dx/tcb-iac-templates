# tcb-iac-templates

TCB IaC Templates

更新后需要打包成 zip 包并发布到 COS 的 tcb-iac-templates 目录下（访问地址为 https://weda.cloud.tencent.com/tcb-iac-templates/tcb-iac-templates.zip）

## 注意事项

- 资源模板的目录名称为全小写，比如 webapp，与对应的 packages/iac-core/src/constants.ts 中定义的 ResourceOriginKeyMap 保持一致

- 资源的根目录必须有 package.json 文件，里面必须有 tcbRepo.type 字段，值为 packages/iac-core/src/constants.ts 中定义的 ResourceOriginKeyMap 对应的值