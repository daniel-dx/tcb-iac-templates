# tcb-iac-templates

TCB IaC Templates

## 注意事项

- 资源模板的目录名称为全小写，比如 webapp，与对应的 ResourceType 的小写形式保持一致

- 资源的根目录必须有 package.json 文件，里面必须有 tcbRepo.type 字段，值为 ResourceType 的小写形式，比如 webapp
