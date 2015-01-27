module.exports =  
  id:
    type:"int"
    autoIncrement: true
    primaryKey: true
  user_id:"int"
  user_nick:"varchar(100)"
  user_headpic:"varchar(255)"
  title:"varchar(255)"
  md:
    type:"text"
    private:true
  html:
    type:"text"
    set:(v)->
      return this.setDataValue('html', xss(v));
  visit_count:
    defaultValue:0
    type:"int"
  comment_count:
    defaultValue:0
    type:"int"
  zan_count:
    defaultValue:0
    type:"int"
  publish_time:"int"
  is_publish:
    defaultValue:0
    type:"tinyint"
    private:true
  is_jian:
    defaultValue:0
    type:"tinyint"
    private:true
  is_yuanchuang:
    defaultValue:0
    type:"tinyint"
    private:true
  sort:"int"
  is_top:"tinyint"
  type:
    type:"int" 
    defaultValue:1
    private:true
  quote_url:
    type:"varchar(255)" #引用原文url
    private:true
  desc:"text"
  main_pic:"varchar(255)"
  tagNames:
    type:"varchar(255)"
    private:true
  column_id:"int"
  uuid:"varchar(40)"
  score:
    defaultValue:0
    type:"double"
    private:true
  pinyin:"varchar(1000)"
  is_buy: #是否收费
    defaultValue:0
    type:"tinyint"
  tags:"varchar(100)"

