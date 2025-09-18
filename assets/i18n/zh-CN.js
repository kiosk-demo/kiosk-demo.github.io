/* eslint-disable unicorn/filename-case */
i18n({
  meta: {
    title: '点点 触控导览系统 | Kabob 新零售云',
    description:
      '针对百货商场提供可设定资讯的后台与焦点触控导览模板，可搭配Lookr发布内容于触控屏幕/平板电脑，提高消费者互动性。'
  },
  views: {
    main: {
      sign_out: '登出',
      title: {
        dashboard: '仪表板',
        complex_management: '分馆管理',
        brands_management: '品牌管理',
        edm: '电子型录',
        layout_managenent: '版型管理',
        extension_management: '分机管理',
        account_setting: '帐号管理',
        settings: '设定'
      },
      brands: {
        brand: '品牌列表',
        advanced_option: '进阶选项',
        clear_option: '清空选项',
        stores_amount: '门店数量',
        store_location: '门店位置',
        please_enter: '请输入关键字',
        multiple_choice: '多选',
        index: {
          name: '品牌',
          category: '分类',
          stores: '门店',
          contact_name: '联络人',
          contact_phone: '联络人电话'
        },
        new: {
          title: '新增品牌'
        },
        form: {
          brand_name: '品牌',
          brand_logo: '品牌标志',
          require_image: '建议上传尺寸：400*400px',
          contact_person: '联络人',
          contact_phone: '联系电话',
          category: '类别',
          subcategory: '子类别',
          description: '描述',
          edm: '电子型录',
          url: '活动管理网址',
          choose_edm: '选择电子型录',
          choose_category: '选择类别'
        }
      },
      stores: {
        index: {
          department_store: '分馆',
          building: '楼栋',
          floor: '楼层',
          contact_name: '联络人',
          contact_phone: '联络人电话',
          no: '门店编号',
          phone: '门店电话',
          introduction: '详细介绍',
          name: '门店名称'
        },
        new: {
          title: '新增门店'
        },
        edit: {
          title: '编辑门店'
        },
        form: {
          basic: '基本设定',
          plugin: '插件',
          h5_url: 'Tico 插件连结(请至Tico go 取得简易显示器连结)',
          business_hour: '营业时间',
          theme: '主题图片',
          surrounding: '环境图片',
          image: '图片',
          place_id: '地点ID',
          qr_code: '二维码',
          require_qrcode: '建议上传尺寸：200*200px',
          require_theme: '建议上传尺寸：2000*2000px',
          require_surrounding: '建议上传尺寸：600*600px'
        }
      },
      categories: {
        index: {
          applied: '已套用：{{count}}',
          forward: '排序向前',
          backward: '排序向后',
          new_subcategory: '新增子分类'
        },
        new: {
          title: '新增分类'
        },
        edit: {
          title: '编辑分类'
        },
        form: {
          name: '名称',
          intro: '描述',
          require_image: '建议上传尺寸：200*200px'
        }
      },
      dashboards: {
        index: {
          title: '总览',
          department_store: '分馆',
          building: '楼栋',
          floor: '楼层',
          display_links: '分机',
          time: '时间',
          seven_days: '最近7天',
          thirty_days: '最近30天',
          six_months: '最近180天',
          year: '最近365天',
          customize: '自订',
          statistics: '分机统计',
          usage_count: '总使用量',
          visits: '人次',
          average_page: '平均页面浏览数',
          pages: '页数',
          tip_usage_count: {
            title: '使用量：',
            content1: '期间内分机被访问的人次。',
            content2: '分机有闲置返回设定时，每次主页返回计算为一个访问人次',
            content3: '分机无闲置返回设定时，分机每5分钟期间的计算为一个使用人次'
          },
          tip_average: {
            title: '平均观看页数：',
            content: '期间内用户每次使用分机时平均使用了多少页数'
          }
        },
        show: {
          pages_views: '页面浏览数',
          page: '页面名称',
          clicks: '总点击次数',
          last_stay: '最终停留次数',
          store_list: '门店列表',
          store_intro: '门店介绍',
          search_floor: '楼层搜索',
          floor_store_list: '各楼层门店一览',
          search_category: '分类搜索',
          facility_list: '公共设施列表',
          store_location_map: '门店位置地图',
          facility_map: '公共设施位置地图',
          accessible_icon: '友善模式使用次数',
          stores_views: '门店浏览数',
          store: '门店',
          facilities_views: '公共设施浏览数',
          facility: '公共设施'
        }
      },
      facilities: {
        index: {
          name: '名称',
          note: '注记',
          category: '分类'
        },
        new: {
          title: '新增公共设施'
        },
        edit: {
          title: '编辑公共设施'
        },
        form: {
          name: '名称',
          note: '注记',
          require_image: '建议上传尺寸：240*240px'
        }
      },
      department_stores: {
        index: {
          title: '分馆管理',
          no_area: '无区域',
          name: '名称',
          store_count: '店数',
          address: '地址',
          phone: '分馆电话',
          contact_name: '联络人',
          contact_phone: '联络人电话',
          new_department_store: '新增分馆',
          buildings: '楼栋设定',
          events: '活动管理',
          announcements: '最新消息',
          download_roles: '下载角色权限',
          download_department_stores: '下载分馆权限',
          download_bradns: '下载品牌权限',
          download_display_links: '下载分机权限',
          download_activities: '下载活动日志'
        },
        form: {
          new: '新增分馆',
          basic_setting: '基本设定',
          name: '分馆名称',
          name_placeholder: '输入分馆名称',
          name_error: '请输入分馆名称',
          phone: '分馆电话',
          address: '分馆地址',
          intro: '分馆资讯',
          header_image: '分馆形象图',
          logo: 'Logo',
          contact: '联络资讯',
          contact_name: '联络人名称',
          contact_phone: '联络人电话',
          contact_email: '联络人电子邮件',
          work_days_intro: '营业时间',
          traffic: '交通方式',
          floor: '地面',
          place_id: '地点编号',
          qr_code: '二维码',
          choose_complex: '请选择复杂',
          choose_building: '请选择建筑',
          choose_floor: '请选择楼层',
          require_logo: '建议上传尺寸：308*308px (横式版型) 或 308*160px (直式版型)',
          require_image: '建议上传尺寸：1200*640px (横式版型) 或 2000*640px (直式版型)'
        },
        area_new: {
          title: '新增区域'
        },
        area_edit: {
          title: '编辑区域'
        },
        area_form: {
          name: '名称',
          map_id: '地图ID'
        },
        buildings: {
          new_building: '新增楼栋',
          new_floor: '新增楼层'
        },
        building_form: {
          title: '编辑楼栋',
          name: '楼栋名称',
          image: '图片',
          intro: '简介',
          intro_hint: '字数限制100字',
          place_id: '地点ID'
        },
        building_floor_form: {
          title: '编辑楼层',
          name: '楼层名称',
          topic: '楼层主题',
          map: '地图',
          intro: '楼层介绍',
          facilities: '公共设施',
          new_facilityt: '新增公共设施',
          spot_name: '站点名称',
          spot_image: '站点图片',
          require_map: '建议上传尺寸：1064*978px (横式版型) 或 1760*900px (直式版型)',
          require_spot: '建议上传尺寸：600*600px'
        },
        building_floors_facility_form: {
          new: '新增公共设施',
          edit: '编辑公共设施',
          facility: '公共设施',
          place_id: '地点ID'
        },
        map: {
          title: '地图',
          stores: '门店',
          facilities: '公共设施',
          upload_map: '上传地图'
        },
        events: {
          index: {
            image: '图片',
            name: '名称',
            duration: '活动期间',
            location: '地点',
            status: '状态',
            publish: '发布',
            approve: '审核通过',
            reject: '审核驳回',
            reclaim: '撤回',
            confirm_publish: '确定发布{{name}}？ ',
            confirm_approve: '确定通过{{name}}？ ',
            confirm_reject: '确定驳回{{name}}？ ',
            confirm_reclaim: '确定撤回{{name}}？ '
          },
          new: {
            title: '新增活动'
          },
          edit: {
            title: '编辑活动'
          },
          form: {
            name: '名称',
            brand: '品牌',
            building: '地点',
            intro: '描述',
            start_at: '开始时间',
            end_at: '结束时间',
            require_image: '建议上传尺寸：1520*640px'
          },
          reject: {
            reason: '原因'
          }
        },
        announcements: {
          index: {
            name: '名称',
            duration: '期间',
            status: '状态',
            publish: '发布',
            reclaim: '撤回',
            confirm_publish: '确定发布{{name}}？ ',
            confirm_reclaim: '确定撤回{{name}}？ '
          },
          new: {
            title: '新增最新消息'
          },
          edit: {
            title: '编辑最新消息'
          },
          form: {
            name: '名称',
            intro: '描述',
            start_at: '开始时间',
            end_at: '结束时间'
          }
        }
      },
      edms: {
        index: {
          title: '电子型录',
          name: '名称',
          tag_list: '标签'
        },
        new: {
          title: '新增电子型录'
        },
        edit: {
          title: '编辑'
        },
        form: {
          name: '名称',
          tag_list: '标签',
          import_images: '汇入图片',
          require_image: '建议上传尺寸：1600*1320px'
        },
        images: {
          title: '汇入图片'
        }
      },
      display_links: {
        index: {
          title: '分机管理',
          name: '名称',
          location: '地点',
          daily_usage: '每日使用量 {{usage}}',
          expired: '已到期',
          estimated_end_date: '预计到期日 {{date}}'
        },
        new: {
          title: '新增分机'
        },
        edit: {
          title: '编辑分机'
        },
        form: {
          basic: '基本设定',
          name: '名称',
          location: '地点',
          place_id: '地点ID',
          terminal_content: '内容显示',
          department_store: '分馆',
          building: '楼栋',
          floor: '楼层',
          style: '风格设定',
          primary_color: '主色系',
          choose_layout: '选择版型',
          content: '门店配置',
          active: '啟用中',
          inactive: '未啟用',
          upload_image: '上传图片',
          url: '网址',
          preview_url: '预览 URL',
          display_url: '显示 URL',
          return_settings: '闲置返回设定',
          return_home: '返回首页',
          return_home_seconds: '首页闲置时间',
          return_accessible: '友善模式返回',
          return_accessible_seconds: '友善模式闲置时间',
          accessible_background: '友善模式背景',
          require_accessible: '建议上传尺寸：2160*2160px',
          display_store_map: '显示门店位置地图',
          setting_store_configuration: '设定门店配置'
        },
        upload_image: {
          title: '上传图片',
          image_hint: '建议上传尺寸：464*700px'
        }
      },
      user_locales: {
        index: {
          title: '语系管理',
          name: '名称',
          sys_locale: '系统语系',
          notice: '排序第一为预设语言'
        },
        new: {
          title: '新增语系'
        },
        edit: {
          title: '编辑语系'
        },
        form: {
          edit: '编辑',
          name: '名称',
          name_placeholder: '名称',
          sys_locale: '系统语系'
        }
      },
      settings: {
        display_links: '分机',
        handicap_friendly: '友善切换',
        display_footer: '显示页脚',
        successfully_saved: '储存成功',
        section: '区段编辑',
        preview: '预览',
        form: {
          text: '文字',
          upload_image: '上传图片',
          image_hint: '建议上传尺寸：948*160px'
        }
      },
      account: {
        options: {
          download: {
            dashboard_rp: '分机使用纪录报表',
            permission_rp: '成员权限报表',
            record_rp: '活动日志报表'
          }
        },
        employees: {
          title: '成员权限',
          name: '成员名称',
          email: '信箱',
          permission: '權限',
          download_permissions: 'Download Permissions',
          permissions: {
            all: '全功能',
            department_store_all: '分管管理全功能',
            department_store_read: '分管管理查看',
            department_store_write: '分管管理编辑',
            brand_all: '品牌全功能',
            brand_read: '品牌查看',
            brand_write: '品牌编辑',
            edm_read: '电子型录查看',
            edm_write: '电子型录编辑',
            layout_all: '版型管理全功能',
            layout_read: '版型管理查看',
            layout_write: '版型管理编辑',
            display_link_all: '分机管理全功能',
            display_link_read: '分机管理查看',
            display_link_write: '分机管理编辑',
            setting_read: '设定查看',
            setting_write: '设定编辑'
          }
        },
        activities: {
          title: '活动日志',
          advance_options: '进阶选项',
          action: '操作',
          target: '目标',
          user: '使用者',
          clear: '清除选项'
        }
      },
      layout: {
        index: {
          title: '版型管理',
          name: '名称',
          type: '版型种类',
          kiosk_layout: 'Kiosk 版型',
          bricks_layout: 'Bricks 版型'
        },
        new: {
          title: '新增版型'
        },
        edit: {
          title: '版型编辑'
        },
        form: {
          basic: '基本设定',
          name: '名称',
          layout: '版型',
          touchable: '可触控版型',
          untouchable: '不可触控版型',
          customized: '客制化版型',
          settings: '设定版型',
          display_header: '开启页首',
          display_store_map: '显示门店位置地图',
          layout_1: '版型一',
          layout_2: '版型二',
          un_layout_1: '不可触摸版型一',
          rws_layout: 'RWS版型'
        }
      }
    },
    display_links: {
      home: '首页',
      search: '搜索',
      business_hours: '营业时间：',
      take_me_there: '导航',
      index: {
        choose_category: '选择分类',
        choose_subcategory: '选择子分类',
        all: '全部',
        other: '其他',
        business_hours: '营业时间'
      },
      floors: {
        show: {
          brands: '楼层品牌',
          public_facilities: '公共设施'
        }
      },
      stores: {
        show: {
          category: '分类',
          location: '门店位置',
          phone: '门店电话',
          business_hours: '营业时间',
          edm: '电子型录'
        }
      },
      display_links_shared: {
        map: {
          location: '地点'
        },
        search_sidebar: {
          floors: '依楼层搜索',
          categories: '依分类搜索'
        },
        search: {
          text: '请选择搜索方法'
        }
      },
      facilities: {
        index: {
          title: '公共设施',
          category: '分类',
          name: '站点名称',
          location: '位置',
          distance: '距离'
        }
      },
      extension_display_link: {
        title: '连结',
        display: '显示端',
        label: '分机显示连结',
        apply_extension: '套用至其他分机',
        selected: '已选取 ：{{count}} 个分机'
      }
    },
    brands: {
      events: {
        index: {
          title: '活动管理',
          publish: '发布',
          reclaim: '撤回',
          apply_event: '活动申请',
          confirm_publish: '确定发布{{name}}？ ',
          confirm_reclaim: '确定撤回{{name}}？ '
        },
        new: {
          title: '新增活动'
        },
        edit: {
          title: '编辑活动'
        },
        form: {
          name: '名称',
          building: '地点',
          intro: '描述',
          start_at: '开始时间',
          end_at: '结束时间'
        }
      }
    }
  },
  shared: {
    components: {
      brands_nav: {
        brands: '品牌管理',
        categories: '分类管理',
        facilities: '公共设施'
      },
      setting_nav: {
        languages: '语系管理',
        settings: '設定'
      },
      department_stores_nav: {
        edit: '编辑信息',
        buildings: '楼栋设定',
        events: '活动管理',
        announcements: '最新消息'
      },
      stores_nav: {
        stores: '门店管理',
        edit: '编辑品牌'
      },
      permissions: {
        title: '权限设定',
        search: '搜索',
        all: '全部',
        assigned: '拥有者',
        super_users: '所有权限者',
        scope: {
          departments: '组织',
          positions: '职位'
        },
        type: {
          departments: '部门',
          shops: '分店',
          positions: '职位',
          employees: '成员'
        },
        read: '查看',
        write: '编辑'
      },
      rws_map: {
        map_error: "Map isn't available due to internet connection"
      }
    }
  },
  common: {
    locale: '简体中文',
    ok: '确认',
    cancel: '取消',
    unclassified: '未分类',
    edit: '编辑资讯',
    save: '储存',
    delete: '删除',
    confirm_delete: '确定删除{{name}}？',
    new_image: '新图片',
    current_editting: '当前编辑',
    please_select: '请选择',
    done: '完成',
    permissions: '权限',
    search: '搜寻',
    clear: '重置选项',
    copy: '复制',
    input_placeholder: '請輸入{{input}}'
  },
  errors: {
    something_wrong: '出问题了。 请再试一次。',
    required: '此栏位必填',
    max_file_size: '文件大小不可超过{{maxFileSize.humanSize}}'
  },
  public_activity: {
    common: {
      none: 'None',
      shop_device_group: '装置组',
      time: 'Time',
      user: 'User',
      operation: 'Operation',
      target: 'Target',
      content: 'Content',
      ip: 'IP',
      country: 'Country',
      device: 'Device'
    },
    employee: {
      sign_in: {
        target: 'Lookr',
        description: '登入 {{count}} 次',
        name: '登入'
      },
      download_report: {
        target: '装置上线报表',
        description: '下载了装置上线报表 {{count}} 次',
        name: '下载装置上线报表'
      },
      download_activity: {
        target: '活动日志',
        description: '下载了活动日志 {{count}} 次',
        name: '下载活动日志'
      },
      download_campaign_media_report: {
        target: '媒体报表',
        description: '下载了媒体报表 {{count}} 次',
        name: '下载媒体报表'
      }
    },
    role_permission: {
      download: {
        target: '角色权限',
        description: '下载角色权限报表 {{count}} 次'
      }
    },
    department_store_permission: {
      download: {
        target: '分馆报表',
        description: '下载分馆报表 {{count}} 次'
      }
    },
    brand: {
      create_file: {
        target: '品牌',
        description: '建立檔案: {{ trackable }}'
      },
      create: {
        target: '品牌',
        description: '建立品牌檔案: {{ trackable }}'
      },
      update: {
        target: '品牌',
        description: '编辑品牌: {{ trackable }}'
      },
      destroy: {
        target: '品牌',
        description: '移除品牌: {{ trackable }}'
      },
      destroy_file: {
        target: '品牌',
        description: '移除品牌檔案: {{ trackable }}'
      }
    },
    category: {
      create: {
        target: '分类',
        description: '建立分类: {{ trackable }}'
      },
      update: {
        target: '分类',
        description: '更新分类: {{ trackable }}'
      },
      destroy: {
        target: '分类',
        description: '移除分类: {{ trackable }}'
      },
      destroy_file: {
        target: '分类',
        description: '移除分类檔案: {{ trackable }}'
      },
    },
    brand_permission: {
      download: {
        target: '品牌报表',
        description: '下载品牌报表 {{count}} 次'
      }
    },
    display_link: {
      create: {
        target: '分機',
        description: '建立分机: {{ trackable }}'
      },
      update: {
        target: '分機',
        description: '更新分机: {{ trackable }}'
      },
      destroy: {
        target: '分機',
        description: '移除分机: {{ trackable }}'
      }
    },
    display_link_permission: {
      download: {
        target: '分機權限',
        description: '下載 {{count}} 次'
      }
    },
    edm: {
      create: {
        target: '电子型录',
        description: '新增电子型录: {{ trackable }}'
      },
      update: {
        target: '电子型录',
        description: '编辑电子型录: {{ trackable }}'
      },
      destroy: {
        target: '电子型录',
        description: '移除电子型录: {{ trackable }}'
      },
    },
    facility: {
      create: {
        target: '公共设施',
        description: '新增公共設施: {{ trackable }}'
      },
      update: {
        target: '公共设施',
        description: '更新公共设施: {{ trackable }}'
      },
      destroy: {
        target: '公共设施',
        description: '移除公共设施: {{ trackable }}'
      },
      destroy_file: {
        target: '公共设施',
        description: '移除公共设施檔案: {{ trackable }}'
      }
    },
    layout_management: {
      create: {
        target: '版型',
        description: '新增版型: {{ trackable }}'
      },
      update: {
        target: '版型',
        description: '更新版型: {{ trackable }}'
      },
      destroy: {
        target: '版型',
        description: '移除版型: {{ trackable }}'
      },
    },
    store: {
      create: {
        target: '門店',
        description: '建立门店: {{ trackable }}'
      },
      update: {
        target: '門店',
        description: '更新门店: {{ trackable }}'
      },
      destroy: {
        target: '門店',
        description: '移除门店: {{ trackable }}'
      },
      create_file: {
        target: '門店',
        description: '建立门店图片: {{ trackable }}'
      },
    },
    building_floors_facility: {
      create: {
        target: '設施',
        description: '建立設施: {{ trackable }}'
      },
      update: {
        target: '設施',
        description: '更新設施: {{ trackable }}'
      },
      destroy: {
        target: '設施',
        description: '移除設施: {{ trackable }}'
      },
    },
    building_floor: {
      create: {
        target: '楼层',
        description: '建立楼层: {{ trackable }}'
      },
      update: {
        target: '楼层',
        description: '更新楼层: {{ trackable }}'
      },
      destroy: {
        target: '楼层',
        description: '移除楼层: {{ trackable }}'
      },
    },
    event: {
      create: {
        target: '活動',
        description: '建立活动: {{ trackable }}'
      },
      create_file: {
        target: '活動圖片',
        description: '建立活动图片: {{ trackable }}'
      },
      update: {
        target: '活動',
        description: '编辑活动: {{ trackable }}'
      },
      destroy: {
        target: '活動',
        description: '移除活动: {{ trackable }}'
      },
      destroy_file: {
        target: '活動圖片',
        description: '移除活动图片: {{ trackable }}'
      }
    },
    activity: {
      download: {
        target: '活动日志报表',
        description: '下载活动日志报表 {{count}} 次'
      }
    },
    company_config: {
      update: {
        target: '設定',
        description: '更新系统设定'
      }
    },
    user_locale: {
      create: {
        target: '語系設定',
        description: '建立语系: {{ trackable }}'
      },
      update: {
        target: '語系設定',
        description: '更新語系: : {{ trackable }}'
      },
      destroy: {
        target: '語系設定',
        description: '移除语系: {{ trackable }}'
      },
    },
    sortable_image: {
      create_file: {
        target: '公共設施',
        description: '上传公共设施图片: {{ trackable }}'
      }
    },
    area: {
      create: {
        target: '分館區域',
        description: '新增分馆区域: {{ trackable }}'
      },
      update: {
        target: '分館區域',
        description: '更新分馆区域: : {{ trackable }}'
      },
      destroy: {
        target: '分館區域',
        description: '移除分館區域: {{ trackable }}'
      },
    },
    department_store: {
      create: {
        target: '分館',
        description: '新增分馆: {{ trackable }}'
      },
      update: {
        target: '分館區域',
        description: '更新分馆: : {{ trackable }}'
      },
      destroy: {
        target: '分館區域',
        description: '移除分館: {{ trackable }}'
      },
    },
    building: {
      create: {
        target: '楼栋',
        description: '新增楼栋: {{ trackable }}'
      },
      update: {
        target: '楼栋',
        description: '更新楼栋: : {{ trackable }}'
      },
      destroy: {
        target: '楼栋',
        description: '移除楼栋: {{ trackable }}'
      },
    },
    announcement: {
      create: {
        target: '最新消息',
        description: '新增最新消息: {{ trackable }}'
      },
      update: {
        target: '最新消息',
        description: '更新最新消息: : {{ trackable }}'
      },
      destroy: {
        target: '最新消息',
        description: '移除最新消息: {{ trackable }}'
      },
    }
  }
});
