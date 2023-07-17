### 命令行参数  
- [0] 文件名，且该文件应该和.jar在同一级目录下
- [1] 推荐的目标用户id
- [2] 推荐歌曲数目
- [3] 输出文件的命名（不需要加后缀.txt）
### 输出文件  
.txt文件 在.jar同一目录下  
内容为推荐歌名-歌手，用;分隔  
（会产生中间文件hashedData.csv）
java -jar RecommendLearn.jar train.csv 45331266 12 45331266 