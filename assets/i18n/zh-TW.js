/* eslint-disable unicorn/filename-case */
i18n({
  meta: {
    title: 'Kiosk 觸控導覽系統 | Kabob 新零售雲',
    description:
      '針對百貨商場提供可設定資訊的後台與樓層觸控導覽模板，可搭配 Lookr 發佈內容於觸控屏幕/平板電腦，提高消費者互動。'
  },
  views: {
    main: {
      sign_out: '登出',
      title: {
        dashboard: '儀表板',
        complex_management: '分館管理',
        brands_management: '品牌管理',
        edm: '電子型錄',
        layout_managenent: '版型管理',
        extension_management: '分機管理',
        account_setting: '帳號管理',
        settings: '設定'
      },
      brands: {
        brand: '品牌列表',
        advanced_option: '進階選項',
        clear_option: '清空選項',
        stores_amount: '門店數量',
        store_location: '門店位置',
        please_enter: '輸入關鍵字',
        multiple_choice: '多選',
        index: {
          name: '品牌',
          category: '分類',
          stores: '門店',
          contact_name: '聯絡人',
          contact_phone: '聯絡人電話'
        },
        new: {
          title: '新增品牌'
        },
        form: {
          brand_name: '品牌',
          brand_logo: '品牌標誌',
          require_image: '建議上傳尺寸：400*400px',
          contact_person: '聯絡人',
          contact_phone: '聯繫電話',
          category: '類別',
          subcategory: '子類別',
          description: '描述',
          edm: '電子型錄',
          url: '活動管理網址',
          choose_edm: '選擇電子型錄',
          choose_category: '選擇類別'
        }
      },
      stores: {
        index: {
          department_store: '分館',
          building: '樓棟',
          floor: '樓層',
          contact_name: '聯絡人',
          contact_phone: '聯絡人電話',
          no: '門店編號',
          phone: '門店電話',
          introduction: '詳細介紹',
          name: '門店名稱'
        },
        new: {
          title: '新增門店'
        },
        edit: {
          title: '編輯門店'
        },
        form: {
          basic: '基本設定',
          plugin: '插件',
          h5_url: 'Tico 插件連結(請至Tico go 取得簡易顯示器連結)',
          business_hour: '營業時間',
          theme: '主題圖片',
          surrounding: '環境圖片',
          image: '圖片',
          place_id: '地點ID',
          qr_code: 'QR Code',
          require_qrcode: '建議上傳尺寸：200*200px',
          require_theme: '建議上傳尺寸：2000*2000px',
          require_surrounding: '建議上傳尺寸：600*600px'
        }
      },
      categories: {
        index: {
          applied: '已套用：{{count}}',
          forward: '排序向前',
          backward: '排序向後',
          new_subcategory: '新增子分類'
        },
        new: {
          title: '新增分類'
        },
        edit: {
          title: '編輯分類'
        },
        form: {
          name: '名稱',
          intro: '描述',
          require_image: '建議上傳尺寸：200*200px'
        }
      },
      dashboards: {
        index: {
          title: '總覽',
          department_store: '分館',
          building: '樓棟',
          floor: '樓層',
          display_links: '分機',
          time: '時間',
          seven_days: '最近7天',
          thirty_days: '最近30天',
          six_months: '最近180天',
          year: '最近365天',
          customize: '自訂',
          statistics: '分機統計',
          usage_count: '總使用量',
          visits: '人次',
          average_page: '平均頁面瀏覽數',
          pages: '頁數',
          tip_usage_count: {
            title: '使用量：',
            content1: '期間內分機被訪問的人次。',
            content2: '分機有閒置返回設定時，每次主頁返回計算為一個訪問人次',
            content3: '分機無閒置返回設定時，分機每5分鐘期間的計算為一個使用人次'
          },
          tip_average: {
            title: '平均觀看頁數：',
            content: '期間內用戶每次使用分機時平均使用了多少頁數'
          }
        },
        show: {
          pages_views: '頁面瀏覽數',
          page: '頁面名稱',
          clicks: '總點擊次數',
          last_stay: '最終停留次數',
          store_list: '門店列表',
          store_intro: '門店介紹',
          search_floor: '樓層搜索',
          floor_store_list: '各樓層門店一覽',
          search_category: '分類搜索',
          facility_list: '公共設施列表',
          store_location_map: '門店位置地圖',
          facility_map: '公共設施位置地圖',
          accessible_icon: '友善模式使用次數',
          stores_views: '門店瀏覽數',
          store: '門店',
          facilities_views: '公共設施瀏覽數',
          facility: '公共設施'
        }
      },
      facilities: {
        index: {
          name: '名稱',
          note: '註記',
          category: '分類'
        },
        new: {
          title: '新增公共設施'
        },
        edit: {
          title: '編輯公共設施'
        },
        form: {
          name: '名稱',
          note: '註記',
          require_image: '建議上傳尺寸：240*240px'
        }
      },
      department_stores: {
        index: {
          title: '分館管理',
          no_area: '無區域',
          name: '名稱',
          store_count: '店數',
          address: '地址',
          phone: '分館電話',
          contact_name: '聯絡人',
          contact_phone: '聯絡人電話',
          new_department_store: '新增分館',
          buildings: '樓棟設定',
          events: '活動管理',
          announcements: '最新消息',
          download_roles: '下載角色權限',
          download_department_stores: '下載分館權限',
          download_bradns: '下載品牌權限',
          download_display_links: '下載分機權限',
          download_activities: '下載活動日誌'
        },
        form: {
          new: '新增分館',
          basic_setting: '基本設定',
          name: '分館名稱',
          name_placeholder: '輸入分館名稱',
          name_error: '請輸入分館名稱',
          phone: '分館電話',
          address: '分館地址',
          intro: '分館資訊',
          header_image: '分館形象圖',
          logo: 'Logo',
          contact: '聯絡資訊',
          contact_name: '聯絡人名稱',
          contact_phone: '聯絡人電話',
          contact_email: '聯絡人電子郵件',
          work_days_intro: '營業時間',
          traffic: '交通方式',
          require_logo: '建議上傳尺寸：308*308px (橫式版型) 或 308*160px (直式版型)',
          require_image: '建議上傳尺寸：1200*640px (橫式版型) 或 2000*640px (直式版型)'
        },
        area_new: {
          title: '新增區域'
        },
        area_edit: {
          title: '編輯區域'
        },
        area_form: {
          name: '名稱',
          map_id: '地圖ID'
        },
        buildings: {
          new_building: '新增樓棟',
          new_floor: '新增樓層'
        },
        building_form: {
          title: '編輯樓棟',
          name: '樓棟名稱',
          image: '圖片',
          intro: '簡介',
          intro_hint: '字數限制100字',
          place_id: '地點ID'
        },
        building_floor_form: {
          title: '編輯樓層',
          name: '樓層名稱',
          topic: '樓層主題',
          map: '地圖',
          intro: '樓層介紹',
          facilities: '公共設施',
          new_facilityt: '新增公共設施',
          spot_name: '站點名稱',
          spot_image: '站點圖片',
          require_map: '建議上傳尺寸：1064*978px (橫式版型) 或 1760*900px (直式版型)',
          require_spot: '建議上傳尺寸：600*600px'
        },
        building_floors_facility_form: {
          new: '新增公共設施',
          edit: '編輯公共設施',
          facility: '公共設施',
          place_id: '地點ID'
        },
        map: {
          title: '地圖',
          stores: '門店',
          facilities: '公共設施',
          upload_map: '上傳地圖'
        },
        events: {
          index: {
            image: '圖片',
            name: '名稱',
            duration: '活動期間',
            location: '地點',
            status: '狀態',
            publish: '發布',
            approve: '審核通過',
            reject: '審核駁回',
            reclaim: '撤回',
            confirm_publish: '確定發布{{name}}？',
            confirm_approve: '確定通過{{name}}？',
            confirm_reject: '確定駁回{{name}}？',
            confirm_reclaim: '確定撤回{{name}}？'
          },
          new: {
            title: '新增活動'
          },
          edit: {
            title: '編輯活動'
          },
          form: {
            name: '名稱',
            brand: '品牌',
            building: '地點',
            intro: '描述',
            start_at: '開始時間',
            end_at: '結束時間',
            require_image: '建議上傳尺寸：1520*640px'
          },
          reject: {
            reason: '原因'
          }
        },
        announcements: {
          index: {
            name: '名稱',
            duration: '期間',
            status: '狀態',
            publish: '發布',
            reclaim: '撤回',
            confirm_publish: '確定發布{{name}}？',
            confirm_reclaim: '確定撤回{{name}}？'
          },
          new: {
            title: '新增最新消息'
          },
          edit: {
            title: '編輯最新消息'
          },
          form: {
            name: '名稱',
            intro: '描述',
            start_at: '開始時間',
            end_at: '結束時間'
          }
        }
      },
      edms: {
        index: {
          title: '電子型錄',
          name: '名稱',
          tag_list: '標籤'
        },
        new: {
          title: '新增電子型錄'
        },
        edit: {
          title: '編輯'
        },
        form: {
          name: '名稱',
          tag_list: '標籤',
          import_images: '匯入圖片',
          require_image: '建議上傳尺寸：1600*1320px'
        },
        images: {
          title: '匯入圖片'
        }
      },
      display_links: {
        index: {
          title: '分機管理',
          name: '名稱',
          location: '地點',
          daily_usage: '每日使用量 {{usage}}',
          expired: '已到期',
          estimated_end_date: '預計到期日 {{date}}'
        },
        new: {
          title: '新增分機'
        },
        edit: {
          title: '編輯分機'
        },
        form: {
          basic: '基本設定',
          name: '名稱',
          location: '地點',
          place_id: '地點ID',
          terminal_content: '內容顯示',
          department_store: '分館',
          building: '樓棟',
          floor: '樓層',
          style: '風格設定',
          primary_color: '主色系',
          choose_layout: '選擇版型',
          content: '門店配置',
          active: '啟用中',
          inactive: '未啟用',
          upload_image: '上傳圖片',
          url: '網址',
          preview_url: ' 預覽 URL',
          display_url: '顯示 URL',
          return_settings: '閒置返回設定',
          return_home: '返回首頁',
          return_home_seconds: '首頁閒置時間',
          return_accessible: '友善模式返回',
          return_accessible_seconds: '友善模式閒置時間',
          accessible_background: '友善模式背景',
          require_accessible: '建議上傳尺寸：2160*2160px',
          display_store_map: '顯示門店位置地圖',
          setting_store_configuration: '設定門店配置'
        },
        upload_image: {
          title: '上傳圖片',
          image_hint: '建議上傳尺寸：464*700px'
        },
        extension_display_link: {
          title: '連結',
          display: '顯示端',
          label: '分機顯示連結',
          apply_extension: '套用至其他分機',
          selected: '已選取：{{count}} 個分機 '
        }
      },
      user_locales: {
        index: {
          title: '語系管理',
          name: '名稱',
          sys_locale: '系統語系',
          notice: '排序第一為預設語言'
        },
        new: {
          title: '新增語系'
        },
        edit: {
          title: '編輯語系'
        },
        form: {
          edit: '編輯',
          name: '名稱',
          name_placeholder: '名稱',
          sys_locale: '系統語系'
        }
      },
      settings: {
        display_links: '分機',
        handicap_friendly: '友善切換',
        display_footer: '顯示頁腳',
        successfully_saved: '儲存成功',
        section: '區段編輯',
        preview: '預覽',
        form: {
          text: '文字',
          upload_image: '上傳圖片',
          image_hint: '建議上傳尺寸：948*160px'
        }
      },
      account: {
        options: {
          download: {
            dashboard_rp: '分機使用紀錄報表',
            permission_rp: '成員權限報表',
            record_rp: '活動日誌報表'
          }
        },
        employees: {
          title: '成員權限',
          name: '成員名稱',
          email: '信箱',
          permission: '權限',
          download_permissions: '下載權限',
          permissions: {
            all: '全功能',
            department_store_all: '分管管理全功能',
            department_store_read: '分管管理查看',
            department_store_write: '分管管理編輯',
            brand_all: '品牌全功能',
            brand_read: '品牌查看',
            brand_write: '品牌編輯',
            edm_read: '電子型錄查看',
            edm_write: '電子型錄編輯',
            layout_all: '版型管理全功能',
            layout_read: '版型管理查看',
            layout_write: '版型管理編輯',
            display_link_all: '分機管理全功能',
            display_link_read: '分機管理查看',
            display_link_write: '分機管理編輯',
            setting_read: '設定查看',
            setting_write: '設定編輯'
          }
        },
        activities: {
          title: '活動日誌',
          advance_options: '進階選項',
          action: '操作',
          target: '目標',
          user: '使用者',
          clear: '清除選項'
        }
      },
      layout: {
        index: {
          title: '版型管理',
          name: '名稱',
          type: '版型種類',
          kiosk_layout: 'Kiosk 版型',
          bricks_layout: 'Bricks 版型'
        },
        new: {
          title: '新增版型'
        },
        edit: {
          title: '版型編輯'
        },
        form: {
          basic: '基本設定',
          name: '名稱',
          layout: '版型',
          touchable: '可觸控版型',
          untouchable: '不可觸控版型',
          customized: '客製化版型',
          settings: '設定版型',
          display_header: '開啟頁首',
          display_store_map: '顯示門店位置地圖',
          layout_1: '版型一',
          layout_2: '版型二',
          un_layout_1: '不可觸摸版型一',
          rws_layout: 'RWS版型'
        }
      }
    },
    display_links: {
      home: '首頁',
      search: '搜索',
      business_hours: '營業時間：',
      take_me_there: 'Take me there',
      index: {
        choose_category: '選擇分類',
        choose_subcategory: '選擇子分類',
        all: '全部',
        other: '其他',
        business_hours: '營業時間'
      },
      floors: {
        show: {
          brands: '樓層品牌',
          public_facilities: '公共設施'
        }
      },
      stores: {
        show: {
          category: '分類',
          location: '門店位置',
          phone: '門店電話',
          business_hours: '營業時間',
          edm: '電子型錄'
        }
      },
      display_links_shared: {
        map: {
          location: '地點'
        },
        search_sidebar: {
          floors: '依樓層搜索',
          categories: '依分類搜索'
        },
        search: {
          text: '請選擇搜尋方式'
        }
      },
      facilities: {
        index: {
          title: '公共設施',
          category: '分類',
          name: '站點名稱',
          location: '位置',
          distance: '距離'
        }
      }
    },
    brands: {
      events: {
        index: {
          title: '活動管理',
          publish: '發布',
          reclaim: '撤回',
          apply_event: '活動申請',
          confirm_publish: '確定發布{{name}}？',
          confirm_reclaim: '確定撤回{{name}}？'
        },
        new: {
          title: '新增活動'
        },
        edit: {
          title: '編輯活動'
        },
        form: {
          name: '名稱',
          building: '地點',
          intro: '描述',
          start_at: '開始時間',
          end_at: '結束時間'
        }
      }
    }
  },
  shared: {
    components: {
      brands_nav: {
        brands: '品牌管理',
        categories: '分類管理',
        facilities: '公共設施'
      },
      setting_nav: {
        languages: '語系管理',
        settings: '設定'
      },
      department_stores_nav: {
        edit: '編輯資訊',
        buildings: '樓棟設定',
        events: '活動管理',
        announcements: '最新消息'
      },
      stores_nav: {
        stores: '門店管理',
        edit: '編輯品牌'
      },
      permissions: {
        title: '權限設定',
        search: '搜索',
        all: '全部',
        assigned: '擁有者',
        super_users: '所有權限者',
        scope: {
          departments: '組織',
          positions: '職位'
        },
        type: {
          departments: '部門',
          shops: '分店',
          positions: '職位',
          employees: '成員'
        },
        read: '查看',
        write: '編輯'
      },
      rws_map: {
        map_error: "Map isn't available due to internet connection"
      }
    }
  },
  common: {
    locale: '繁體中文',
    ok: '確認',
    cancel: '取消',
    unclassified: '未分類',
    edit: '編輯',
    save: '儲存',
    delete: '刪除',
    confirm_delete: '確定刪除{{name}}？',
    new_image: '新圖片',
    current_editting: '當前編輯',
    please_select: '請選擇',
    done: '完成',
    permissions: '權限',
    search: '搜尋',
    clear: '重置選項',
    copy: '複製',
    input_placeholder: '請輸入{{input}}'
  },
  errors: {
    something_wrong: '出問題了。 請再試一次。',
    required: '此欄位必填',
    max_file_size: '檔案大小不可超過{{maxFileSize.humanSize}}'
  },
  public_activity: {
    common: {
      none: 'None',
      shop_device_group: '裝置組',
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
        target: '裝置上線報表',
        description: '下載了裝置上線報表 {{count}} 次',
        name: '下載裝置上線報表'
      },
      download_activity: {
        target: '活動日誌',
        description: '下載了活動日誌 {{count}} 次',
        name: '下載活動日誌'
      },
      download_campaign_media_report: {
        target: '媒體報表',
        description: '下載了媒體報表 {{count}} 次',
        name: '下載媒體報表'
      }
    },
    role_permission: {
      download: {
        target: '角色權限',
        description: '下載角色權限報表 {{count}} 次'
      }
    },
    department_store_permission: {
      download: {
        target: '分管權限',
        description: '下載分館報表 {{count}} 次'
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
        description: '編輯品牌: {{ trackable }}'
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
        target: '分類',
        description: '建立分類: {{ trackable }}'
      },
      update: {
        target: '分類',
        description: '編輯分類: {{ trackable }}'
      },
      destroy: {
        target: '分類',
        description: '移除分類: {{ trackable }}'
      },
      destroy_file: {
        target: '分類',
        description: '移除分類檔案: {{ trackable }}'
      },
    },
    brand_permission: {
      download: {
        target: '品牌報表',
        description: '下載品牌報表 {{count}} 次'
      }
    },
    display_link: {
      create: {
        target: '分機',
        description: '建立分機: {{ trackable }}'
      },
      update: {
        target: '分機',
        description: '更新分機: {{ trackable }}'
      },
      destroy: {
        target: '分機',
        description: '移除分機: {{ trackable }}'
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
        target: '電子型錄',
        description: '新增電子型錄: {{ trackable }}'
      },
      update: {
        target: '電子型錄',
        description: '編輯電子型錄: {{ trackable }}'
      },
      destroy: {
        target: '電子型錄',
        description: '移除電子型錄: {{ trackable }}'
      },
    },
    facility: {
      create: {
        target: '公共設施',
        description: '建立公共設施: {{ trackable }}'
      },
      update: {
        target: '公共設施',
        description: '編輯公共設施: {{ trackable }}'
      },
      destroy: {
        target: '公共設施',
        description: '移除公共設施: {{ trackable }}'
      },
      destroy_file: {
        target: '公共設施',
        description: '移除公共設施檔案: {{ trackable }}'
      }
    },
    layout_management: {
      create: {
        target: '版型',
        description: '建立版型: {{ trackable }}'
      },
      update: {
        target: '版型',
        description: '編輯版型: {{ trackable }}'
      },
      destroy: {
        target: '版型',
        description: '移除版型: {{ trackable }}'
      },
    },
    store: {
      create: {
        target: '門店',
        description: '建立門店: {{ trackable }}'
      },
      update: {
        target: '門店',
        description: '更新門店: {{ trackable }}'
      },
      destroy: {
        target: '門店',
        description: '移除門店: {{ trackable }}'
      },
      create_file: {
        target: '門店',
        description: '建立門店圖片: {{ trackable }}'
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
        target: '樓層',
        description: '建立樓層: {{ trackable }}'
      },
      update: {
        target: '樓層',
        description: '更新樓層: {{ trackable }}'
      },
      destroy: {
        target: '樓層',
        description: '移除樓層: {{ trackable }}'
      },
    },
    event: {
      create: {
        target: '活動',
        description: '建立活動: {{ trackable }}'
      },
      create_file: {
        target: '活動圖片',
        description: '建立活動圖片: {{ trackable }}'
      },
      update: {
        target: '活動',
        description: '編輯活動: {{ trackable }}'
      },
      destroy: {
        target: '活動',
        description: '移除活動: {{ trackable }}'
      },
      destroy_file: {
        target: '活動圖片',
        description: '移除活動圖片: {{ trackable }}'
      }
    },
    activity: {
      download: {
        target: '活動日誌報表',
        description: '下載活動日誌報表 {{count}} 次'
      }
    },
    company_config: {
      update: {
        target: '設定',
        description: '更新系統設定'
      }
    },
    user_locale: {
      create: {
        target: '語系設定',
        description: '建立語系: {{ trackable }}'
      },
      update: {
        target: '語系設定',
        description: '更新語系: : {{ trackable }}'
      },
      destroy: {
        target: '語系設定',
        description: '移除語系: {{ trackable }}'
      },
    },
    sortable_image: {
      create_file: {
        target: '公共設施',
        description: '上傳公共設施圖片: {{ trackable }}'
      }
    },
    area: {
      create: {
        target: '分館區域',
        description: '新增分館區域: {{ trackable }}'
      },
      update: {
        target: '分館區域',
        description: '更新分館區域: : {{ trackable }}'
      },
      destroy: {
        target: '分館區域',
        description: '移除分館區域: {{ trackable }}'
      },
    },
    department_store: {
      create: {
        target: '分館',
        description: '新增分館: {{ trackable }}'
      },
      update: {
        target: '分館',
        description: '更新分館: : {{ trackable }}'
      },
      destroy: {
        target: '分館',
        description: '移除分館: {{ trackable }}'
      },
    },
    building: {
      create: {
        target: '樓棟',
        description: '新增樓棟: {{ trackable }}'
      },
      update: {
        target: '樓棟',
        description: '更新樓棟: : {{ trackable }}'
      },
      destroy: {
        target: '樓棟',
        description: '移除樓棟: {{ trackable }}'
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
