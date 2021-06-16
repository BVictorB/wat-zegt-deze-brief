/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  "/": {
    get: {
      responses: {
        /** OK */
        200: unknown;
      };
    };
  };
  "/letters": {
    get: {
      parameters: {
        query: {
          id?: parameters["rowFilter.letters.id"];
          /** The sender of the letter, defined by the user */
          sender?: parameters["rowFilter.letters.sender"];
          /** The time the letter was created at */
          createdAt?: parameters["rowFilter.letters.createdAt"];
          /** The volunteer explaining */
          volunteer_id?: parameters["rowFilter.letters.volunteer_id"];
          /** The user who received and uploaded the letter */
          user_id?: parameters["rowFilter.letters.user_id"];
          status?: parameters["rowFilter.letters.status"];
          messages?: parameters["rowFilter.letters.messages"];
          /** The name of the thumbnail file */
          thumbnail?: parameters["rowFilter.letters.thumbnail"];
          /** IDs for the pages in their respective order */
          page_order?: parameters["rowFilter.letters.page_order"];
          deadline?: parameters["rowFilter.letters.deadline"];
          /** Filtering Columns */
          select?: parameters["select"];
          /** Ordering */
          order?: parameters["order"];
          /** Limiting and Pagination */
          offset?: parameters["offset"];
          /** Limiting and Pagination */
          limit?: parameters["limit"];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters["range"];
          /** Limiting and Pagination */
          "Range-Unit"?: parameters["rangeUnit"];
          /** Preference */
          Prefer?: parameters["preferCount"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["letters"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** letters */
          letters?: definitions["letters"];
        };
        query: {
          /** Filtering Columns */
          select?: parameters["select"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          id?: parameters["rowFilter.letters.id"];
          /** The sender of the letter, defined by the user */
          sender?: parameters["rowFilter.letters.sender"];
          /** The time the letter was created at */
          createdAt?: parameters["rowFilter.letters.createdAt"];
          /** The volunteer explaining */
          volunteer_id?: parameters["rowFilter.letters.volunteer_id"];
          /** The user who received and uploaded the letter */
          user_id?: parameters["rowFilter.letters.user_id"];
          status?: parameters["rowFilter.letters.status"];
          messages?: parameters["rowFilter.letters.messages"];
          /** The name of the thumbnail file */
          thumbnail?: parameters["rowFilter.letters.thumbnail"];
          /** IDs for the pages in their respective order */
          page_order?: parameters["rowFilter.letters.page_order"];
          deadline?: parameters["rowFilter.letters.deadline"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          id?: parameters["rowFilter.letters.id"];
          /** The sender of the letter, defined by the user */
          sender?: parameters["rowFilter.letters.sender"];
          /** The time the letter was created at */
          createdAt?: parameters["rowFilter.letters.createdAt"];
          /** The volunteer explaining */
          volunteer_id?: parameters["rowFilter.letters.volunteer_id"];
          /** The user who received and uploaded the letter */
          user_id?: parameters["rowFilter.letters.user_id"];
          status?: parameters["rowFilter.letters.status"];
          messages?: parameters["rowFilter.letters.messages"];
          /** The name of the thumbnail file */
          thumbnail?: parameters["rowFilter.letters.thumbnail"];
          /** IDs for the pages in their respective order */
          page_order?: parameters["rowFilter.letters.page_order"];
          deadline?: parameters["rowFilter.letters.deadline"];
        };
        body: {
          /** letters */
          letters?: definitions["letters"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
  "/message-status": {
    get: {
      parameters: {
        query: {
          id?: parameters["rowFilter.message-status.id"];
          /** The message for which the state is being kept */
          message_id?: parameters["rowFilter.message-status.message_id"];
          /** The user who received the message */
          user_id?: parameters["rowFilter.message-status.user_id"];
          /** The status */
          read?: parameters["rowFilter.message-status.read"];
          /** Filtering Columns */
          select?: parameters["select"];
          /** Ordering */
          order?: parameters["order"];
          /** Limiting and Pagination */
          offset?: parameters["offset"];
          /** Limiting and Pagination */
          limit?: parameters["limit"];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters["range"];
          /** Limiting and Pagination */
          "Range-Unit"?: parameters["rangeUnit"];
          /** Preference */
          Prefer?: parameters["preferCount"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["message-status"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** message-status */
          "message-status"?: definitions["message-status"];
        };
        query: {
          /** Filtering Columns */
          select?: parameters["select"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          id?: parameters["rowFilter.message-status.id"];
          /** The message for which the state is being kept */
          message_id?: parameters["rowFilter.message-status.message_id"];
          /** The user who received the message */
          user_id?: parameters["rowFilter.message-status.user_id"];
          /** The status */
          read?: parameters["rowFilter.message-status.read"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          id?: parameters["rowFilter.message-status.id"];
          /** The message for which the state is being kept */
          message_id?: parameters["rowFilter.message-status.message_id"];
          /** The user who received the message */
          user_id?: parameters["rowFilter.message-status.user_id"];
          /** The status */
          read?: parameters["rowFilter.message-status.read"];
        };
        body: {
          /** message-status */
          "message-status"?: definitions["message-status"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
  "/message-types": {
    get: {
      parameters: {
        query: {
          id?: parameters["rowFilter.message-types.id"];
          /** Filtering Columns */
          select?: parameters["select"];
          /** Ordering */
          order?: parameters["order"];
          /** Limiting and Pagination */
          offset?: parameters["offset"];
          /** Limiting and Pagination */
          limit?: parameters["limit"];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters["range"];
          /** Limiting and Pagination */
          "Range-Unit"?: parameters["rangeUnit"];
          /** Preference */
          Prefer?: parameters["preferCount"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["message-types"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** message-types */
          "message-types"?: definitions["message-types"];
        };
        query: {
          /** Filtering Columns */
          select?: parameters["select"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          id?: parameters["rowFilter.message-types.id"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          id?: parameters["rowFilter.message-types.id"];
        };
        body: {
          /** message-types */
          "message-types"?: definitions["message-types"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
  "/messages": {
    get: {
      parameters: {
        query: {
          id?: parameters["rowFilter.messages.id"];
          /** The sender of the message */
          sender_id?: parameters["rowFilter.messages.sender_id"];
          /** The content of the message */
          content?: parameters["rowFilter.messages.content"];
          /** The type of message sent */
          type?: parameters["rowFilter.messages.type"];
          date?: parameters["rowFilter.messages.date"];
          /** Filtering Columns */
          select?: parameters["select"];
          /** Ordering */
          order?: parameters["order"];
          /** Limiting and Pagination */
          offset?: parameters["offset"];
          /** Limiting and Pagination */
          limit?: parameters["limit"];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters["range"];
          /** Limiting and Pagination */
          "Range-Unit"?: parameters["rangeUnit"];
          /** Preference */
          Prefer?: parameters["preferCount"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["messages"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** messages */
          messages?: definitions["messages"];
        };
        query: {
          /** Filtering Columns */
          select?: parameters["select"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          id?: parameters["rowFilter.messages.id"];
          /** The sender of the message */
          sender_id?: parameters["rowFilter.messages.sender_id"];
          /** The content of the message */
          content?: parameters["rowFilter.messages.content"];
          /** The type of message sent */
          type?: parameters["rowFilter.messages.type"];
          date?: parameters["rowFilter.messages.date"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          id?: parameters["rowFilter.messages.id"];
          /** The sender of the message */
          sender_id?: parameters["rowFilter.messages.sender_id"];
          /** The content of the message */
          content?: parameters["rowFilter.messages.content"];
          /** The type of message sent */
          type?: parameters["rowFilter.messages.type"];
          date?: parameters["rowFilter.messages.date"];
        };
        body: {
          /** messages */
          messages?: definitions["messages"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
  "/onboardings": {
    get: {
      parameters: {
        query: {
          id?: parameters["rowFilter.onboardings.id"];
          /** The user ID the state is connected to */
          user_id?: parameters["rowFilter.onboardings.user_id"];
          /** The basic onboarding of the app */
          app_onboarding?: parameters["rowFilter.onboardings.app_onboarding"];
          /** The onboarding for submitting a letter, only applicable to "user" roles */
          letter_onboarding?: parameters["rowFilter.onboardings.letter_onboarding"];
          /** Filtering Columns */
          select?: parameters["select"];
          /** Ordering */
          order?: parameters["order"];
          /** Limiting and Pagination */
          offset?: parameters["offset"];
          /** Limiting and Pagination */
          limit?: parameters["limit"];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters["range"];
          /** Limiting and Pagination */
          "Range-Unit"?: parameters["rangeUnit"];
          /** Preference */
          Prefer?: parameters["preferCount"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["onboardings"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** onboardings */
          onboardings?: definitions["onboardings"];
        };
        query: {
          /** Filtering Columns */
          select?: parameters["select"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          id?: parameters["rowFilter.onboardings.id"];
          /** The user ID the state is connected to */
          user_id?: parameters["rowFilter.onboardings.user_id"];
          /** The basic onboarding of the app */
          app_onboarding?: parameters["rowFilter.onboardings.app_onboarding"];
          /** The onboarding for submitting a letter, only applicable to "user" roles */
          letter_onboarding?: parameters["rowFilter.onboardings.letter_onboarding"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          id?: parameters["rowFilter.onboardings.id"];
          /** The user ID the state is connected to */
          user_id?: parameters["rowFilter.onboardings.user_id"];
          /** The basic onboarding of the app */
          app_onboarding?: parameters["rowFilter.onboardings.app_onboarding"];
          /** The onboarding for submitting a letter, only applicable to "user" roles */
          letter_onboarding?: parameters["rowFilter.onboardings.letter_onboarding"];
        };
        body: {
          /** onboardings */
          onboardings?: definitions["onboardings"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
  "/roles": {
    get: {
      parameters: {
        query: {
          /** Slug for role */
          id?: parameters["rowFilter.roles.id"];
          /** Name of the role */
          name?: parameters["rowFilter.roles.name"];
          /** Filtering Columns */
          select?: parameters["select"];
          /** Ordering */
          order?: parameters["order"];
          /** Limiting and Pagination */
          offset?: parameters["offset"];
          /** Limiting and Pagination */
          limit?: parameters["limit"];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters["range"];
          /** Limiting and Pagination */
          "Range-Unit"?: parameters["rangeUnit"];
          /** Preference */
          Prefer?: parameters["preferCount"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["roles"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** roles */
          roles?: definitions["roles"];
        };
        query: {
          /** Filtering Columns */
          select?: parameters["select"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          /** Slug for role */
          id?: parameters["rowFilter.roles.id"];
          /** Name of the role */
          name?: parameters["rowFilter.roles.name"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          /** Slug for role */
          id?: parameters["rowFilter.roles.id"];
          /** Name of the role */
          name?: parameters["rowFilter.roles.name"];
        };
        body: {
          /** roles */
          roles?: definitions["roles"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
  "/users": {
    get: {
      parameters: {
        query: {
          id?: parameters["rowFilter.users.id"];
          /** Role of user */
          user_role?: parameters["rowFilter.users.user_role"];
          /** Optional name of user */
          name?: parameters["rowFilter.users.name"];
          languages?: parameters["rowFilter.users.languages"];
          /** Foreign key relation to "onboardings" table, holding onboarding state for user */
          onboarding_id?: parameters["rowFilter.users.onboarding_id"];
          /** Filtering Columns */
          select?: parameters["select"];
          /** Ordering */
          order?: parameters["order"];
          /** Limiting and Pagination */
          offset?: parameters["offset"];
          /** Limiting and Pagination */
          limit?: parameters["limit"];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters["range"];
          /** Limiting and Pagination */
          "Range-Unit"?: parameters["rangeUnit"];
          /** Preference */
          Prefer?: parameters["preferCount"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["users"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** users */
          users?: definitions["users"];
        };
        query: {
          /** Filtering Columns */
          select?: parameters["select"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          id?: parameters["rowFilter.users.id"];
          /** Role of user */
          user_role?: parameters["rowFilter.users.user_role"];
          /** Optional name of user */
          name?: parameters["rowFilter.users.name"];
          languages?: parameters["rowFilter.users.languages"];
          /** Foreign key relation to "onboardings" table, holding onboarding state for user */
          onboarding_id?: parameters["rowFilter.users.onboarding_id"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          id?: parameters["rowFilter.users.id"];
          /** Role of user */
          user_role?: parameters["rowFilter.users.user_role"];
          /** Optional name of user */
          name?: parameters["rowFilter.users.name"];
          languages?: parameters["rowFilter.users.languages"];
          /** Foreign key relation to "onboardings" table, holding onboarding state for user */
          onboarding_id?: parameters["rowFilter.users.onboarding_id"];
        };
        body: {
          /** users */
          users?: definitions["users"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
  "/rpc/get_user_role": {
    post: {
      parameters: {
        body: {
          args: {
            user_id: string;
          };
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferParams"];
        };
      };
      responses: {
        /** OK */
        200: unknown;
      };
    };
  };
  "/rpc/handle_new_user": {
    post: {
      parameters: {
        body: {
          args: { [key: string]: any };
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferParams"];
        };
      };
      responses: {
        /** OK */
        200: unknown;
      };
    };
  };
  "/rpc/handle_sent_message": {
    post: {
      parameters: {
        body: {
          args: { [key: string]: any };
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferParams"];
        };
      };
      responses: {
        /** OK */
        200: unknown;
      };
    };
  };
  "/rpc/is_in_letter": {
    post: {
      parameters: {
        body: {
          args: {
            letter_id: string;
            uid: string;
          };
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferParams"];
        };
      };
      responses: {
        /** OK */
        200: unknown;
      };
    };
  };
  "/rpc/get_current_user_data": {
    post: {
      parameters: {
        body: {
          args: {
            user_id: string;
          };
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferParams"];
        };
      };
      responses: {
        /** OK */
        200: unknown;
      };
    };
  };
  "/rpc/is_role": {
    post: {
      parameters: {
        body: {
          args: {
            user_id: string;
            u_role: string;
          };
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferParams"];
        };
      };
      responses: {
        /** OK */
        200: unknown;
      };
    };
  };
  "/rpc/update_letter_messages": {
    post: {
      parameters: {
        body: {
          args: {
            letter_id: string;
            message_id: string;
          };
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferParams"];
        };
      };
      responses: {
        /** OK */
        200: unknown;
      };
    };
  };
}

export interface definitions {
  /** Letters sent in by users with the "user" role */
  letters: {
    /**
     * Note:
     * This is a Primary Key.<pk/>
     */
    id: string;
    /** The sender of the letter, defined by the user */
    sender?: string;
    /** The time the letter was created at */
    createdAt?: string;
    /**
     * The volunteer explaining
     *
     * Note:
     * This is a Foreign Key to `users.id`.<fk table='users' column='id'/>
     */
    volunteer_id?: string;
    /**
     * The user who received and uploaded the letter
     *
     * Note:
     * This is a Foreign Key to `users.id`.<fk table='users' column='id'/>
     */
    user_id: string;
    status: string;
    messages?: string;
    /** The name of the thumbnail file */
    thumbnail?: string;
    /** IDs for the pages in their respective order */
    page_order?: string;
    deadline?: string;
  };
  /** Table keeping track of which messages have been read */
  "message-status": {
    /**
     * Note:
     * This is a Primary Key.<pk/>
     */
    id: number;
    /**
     * The message for which the state is being kept
     *
     * Note:
     * This is a Foreign Key to `messages.id`.<fk table='messages' column='id'/>
     */
    message_id?: string;
    /**
     * The user who received the message
     *
     * Note:
     * This is a Foreign Key to `users.id`.<fk table='users' column='id'/>
     */
    user_id?: string;
    /** The status */
    read?: boolean;
  };
  /** The possible types of messages */
  "message-types": {
    /**
     * Note:
     * This is a Primary Key.<pk/>
     */
    id: string;
  };
  /** Chat messages for letters */
  messages: {
    /**
     * Note:
     * This is a Primary Key.<pk/>
     */
    id: string;
    /**
     * The sender of the message
     *
     * Note:
     * This is a Foreign Key to `users.id`.<fk table='users' column='id'/>
     */
    sender_id: string;
    /** The content of the message */
    content: string;
    /**
     * The type of message sent
     *
     * Note:
     * This is a Foreign Key to `message-types.id`.<fk table='message-types' column='id'/>
     */
    type: string;
    date: string;
  };
  /** The table holding the onboarding state per user */
  onboardings: {
    /**
     * Note:
     * This is a Primary Key.<pk/>
     */
    id: number;
    /**
     * The user ID the state is connected to
     *
     * Note:
     * This is a Foreign Key to `users.id`.<fk table='users' column='id'/>
     */
    user_id: string;
    /** The basic onboarding of the app */
    app_onboarding: boolean;
    /** The onboarding for submitting a letter, only applicable to "user" roles */
    letter_onboarding: boolean;
  };
  /** All possible user roles */
  roles: {
    /**
     * Slug for role
     *
     * Note:
     * This is a Primary Key.<pk/>
     */
    id: string;
    /** Name of the role */
    name: string;
  };
  /** Public users database */
  users: {
    /**
     * Note:
     * This is a Primary Key.<pk/>
     */
    id: string;
    /**
     * Role of user
     *
     * Note:
     * This is a Foreign Key to `roles.id`.<fk table='roles' column='id'/>
     */
    user_role: string;
    /** Optional name of user */
    name?: string;
    languages?: string;
    /**
     * Foreign key relation to "onboardings" table, holding onboarding state for user
     *
     * Note:
     * This is a Foreign Key to `onboardings.id`.<fk table='onboardings' column='id'/>
     */
    onboarding_id?: number;
  };
}

export interface parameters {
  /** Preference */
  preferParams: "params=single-object";
  /** Preference */
  preferReturn: "return=representation" | "return=minimal" | "return=none";
  /** Preference */
  preferCount: "count=none";
  /** Filtering Columns */
  select: string;
  /** On Conflict */
  on_conflict: string;
  /** Ordering */
  order: string;
  /** Limiting and Pagination */
  range: string;
  /** Limiting and Pagination */
  rangeUnit: string;
  /** Limiting and Pagination */
  offset: string;
  /** Limiting and Pagination */
  limit: string;
  /** letters */
  "body.letters": definitions["letters"];
  "rowFilter.letters.id": string;
  /** The sender of the letter, defined by the user */
  "rowFilter.letters.sender": string;
  /** The time the letter was created at */
  "rowFilter.letters.createdAt": string;
  /** The volunteer explaining */
  "rowFilter.letters.volunteer_id": string;
  /** The user who received and uploaded the letter */
  "rowFilter.letters.user_id": string;
  "rowFilter.letters.status": string;
  "rowFilter.letters.messages": string;
  /** The name of the thumbnail file */
  "rowFilter.letters.thumbnail": string;
  /** IDs for the pages in their respective order */
  "rowFilter.letters.page_order": string;
  "rowFilter.letters.deadline": string;
  /** message-status */
  "body.message-status": definitions["message-status"];
  "rowFilter.message-status.id": string;
  /** The message for which the state is being kept */
  "rowFilter.message-status.message_id": string;
  /** The user who received the message */
  "rowFilter.message-status.user_id": string;
  /** The status */
  "rowFilter.message-status.read": string;
  /** message-types */
  "body.message-types": definitions["message-types"];
  "rowFilter.message-types.id": string;
  /** messages */
  "body.messages": definitions["messages"];
  "rowFilter.messages.id": string;
  /** The sender of the message */
  "rowFilter.messages.sender_id": string;
  /** The content of the message */
  "rowFilter.messages.content": string;
  /** The type of message sent */
  "rowFilter.messages.type": string;
  "rowFilter.messages.date": string;
  /** onboardings */
  "body.onboardings": definitions["onboardings"];
  "rowFilter.onboardings.id": string;
  /** The user ID the state is connected to */
  "rowFilter.onboardings.user_id": string;
  /** The basic onboarding of the app */
  "rowFilter.onboardings.app_onboarding": string;
  /** The onboarding for submitting a letter, only applicable to "user" roles */
  "rowFilter.onboardings.letter_onboarding": string;
  /** roles */
  "body.roles": definitions["roles"];
  /** Slug for role */
  "rowFilter.roles.id": string;
  /** Name of the role */
  "rowFilter.roles.name": string;
  /** users */
  "body.users": definitions["users"];
  "rowFilter.users.id": string;
  /** Role of user */
  "rowFilter.users.user_role": string;
  /** Optional name of user */
  "rowFilter.users.name": string;
  "rowFilter.users.languages": string;
  /** Foreign key relation to "onboardings" table, holding onboarding state for user */
  "rowFilter.users.onboarding_id": string;
}

export interface operations {}

export interface external {}
